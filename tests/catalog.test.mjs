import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import {
  applyMetadata, buildCatalog, canonicalizeUrl, filterCatalog, markdownLinks,
  normalizeTitle, paperIdentifier, parseHistoryDates, parseReadme, readHistoryDates, safeUrl,
} from '../scripts/catalog.mjs';

const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
const metadata = JSON.parse(await readFile(new URL('../site/metadata.json', import.meta.url), 'utf8'));
const current = buildCatalog(readme, { metadata });

test('the entire current README is imported, including every original external resource link', () => {
  const visible = readme.replace(/<!--[\s\S]*?-->/g, value => value.replace(/[^\n]/g, ''));
  const sourceLines = visible.split(/\r?\n/).flatMap((line, index) => /^\s*[-*+]\s+\[.+?\]\(https?:\/\//.test(line) ? [index + 1] : []);
  const importedLines = current.items.flatMap(item => item.sourceLines).sort((a, b) => a - b);
  assert.deepEqual(importedLines, sourceLines);
  assert.equal(current.stats.sourceEntries, sourceLines.length);
  assert.equal(new Set(current.items.map(item => item.id)).size, current.items.length);
  const originalUrls = [...visible.matchAll(/^\s*[-*+]\s+(.+)$/gm)].flatMap(match => [...match[1].matchAll(/\]\((https?:\/\/[^\s)]+)\)/g)].map(link => link[1]));
  const importedUrls = new Set(current.items.flatMap(item => item.links.map(link => link.url)));
  for (const url of originalUrls) assert.ok(importedUrls.has(url), `Lost original link: ${url}`);
  assert.ok(current.items.every(item => item.sourceEntries.length === item.sourceLines.length));
});

test('all actual hierarchy branches and non-paper resources remain browsable', () => {
  const top = current.categories.filter(category => !category.parent).map(category => category.label);
  assert.deepEqual(top, ['Sensors', 'Robotics Applications', 'Software', 'Review', 'Thesis', 'Products', 'Open-Source', 'Laboratory']);
  for (const category of current.categories) {
    assert.ok(current.items.some(item => item.categories.some(id => id === category.id || id.startsWith(`${category.id}/`))), `Empty imported category: ${category.id}`);
    if (category.parent) assert.equal(category.path.length, current.categories.find(parent => parent.id === category.parent).path.length + 1);
  }
  for (const title of ['GlowTact:', 'TouchScale:', 'TACROSS:', 'TacOT:', 'Tactile Measurement with a GelSight Sensor', 'GelSight Mini', 'Genesis World', 'MIT - Ted Adelson']) {
    assert.ok(current.items.some(item => item.title.startsWith(title)), `Missing representative resource: ${title}`);
  }
  assert.ok(current.items.some(item => item.title === 'GelSight_1'), 'Literal underscores in resource names are retained.');
});

test('paper IDs normalize arXiv variants, publisher DOI links, and IEEE stamp URLs', () => {
  assert.equal(paperIdentifier('https://arxiv.org/pdf/2609.32471v2.pdf'), 'arxiv:2609.32471');
  assert.equal(paperIdentifier('https://arxiv.org/abs/2303.17935.pdf'), 'arxiv:2303.17935');
  assert.equal(paperIdentifier('https://arxiv.org/html/2610.10288v2'), 'arxiv:2610.10288');
  assert.equal(paperIdentifier('https://arxiv.org/pdf/cs/9901001v1'), 'arxiv:cs/9901001');
  assert.equal(paperIdentifier('https://dl.acm.org/doi/abs/10.1145/2010324.1964941'), 'doi:10.1145/2010324.1964941');
  assert.equal(paperIdentifier('https://doi.org/10.1145/2010324.1964941'), 'doi:10.1145/2010324.1964941');
  assert.equal(paperIdentifier('https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=11515073&tag=1'), 'ieee:11515073');
  assert.equal(canonicalizeUrl('http://www.example.org/resource/?utm_source=weekly#section'), 'https://example.org/resource');
  assert.equal(canonicalizeUrl('https://openreview.net/forum?id=abc'), 'https://openreview.net/forum?id=abc');
});

test('ID, canonical URL, and normalized title deduplication preserves memberships and citations', () => {
  const parsed = parseReadme(`## Sensors
### Optical
- [Touch Paper](https://arxiv.org/abs/2601.12345), Li et al., arxiv 2026
## Robotics Applications
### Manipulation
- [TOUCH PAPER](https://arxiv.org/pdf/2601.12345v2.pdf), Li et al., ICRA 2026 ([code](https://github.com/example/touch))
- [Touch-paper!](https://doi.org/10.1234/touch), Li et al., ICRA 2026
## Software
### Library
- [Another name](http://www.example.org/tool/?utm_source=list), Doe, 2020
- [A renamed tool](https://example.org/tool), Doe, 2020`);
  assert.equal(parsed.items.length, 2);
  const paper = parsed.items.find(item => item.id === 'arxiv:2601.12345');
  assert.deepEqual(paper.categories, ['sensors/optical', 'robotics-applications/manipulation']);
  assert.equal(paper.sourceEntries.length, 3);
  assert.equal(paper.links.length, 4);
  assert.deepEqual(paper.alternateTitles, ['TOUCH PAPER', 'Touch-paper!']);
  assert.equal(parsed.stats.duplicatesMerged, 3);
  assert.equal(normalizeTitle(' **Touch–Paper!** '), 'touch paper');
});

test('a title bridge joins earlier duplicate groups without losing any source entry', () => {
  const { items } = parseReadme(`## Sensors
- [One title](https://arxiv.org/abs/2601.11111), Li et al., 2026
- [Second title](https://doi.org/10.1234/bridge), Li et al., 2026
- [Second title](https://arxiv.org/pdf/2601.11111), Li et al., 2026`);
  assert.equal(items.length, 1);
  assert.equal(items[0].sourceEntries.length, 3);
  assert.equal(items[0].sourceLines.length, 3);
});

test('generic products and implementations with the same name are kept separate', () => {
  const biotac = current.items.filter(item => item.title === 'BioTac');
  assert.equal(biotac.length, 2);
  assert.deepEqual(biotac.map(item => item.kind).sort(), ['code', 'product']);
  assert.notEqual(biotac[0].id, biotac[1].id);
  const simulator = current.items.find(item => item.title === 'DIGIT_Simulator');
  assert.ok(simulator.alternateTitles.includes('DIGIT-Gazebo'));
  assert.equal(simulator.categories.length, 2);
});

test('pending repositories never satisfy released code or data filters', () => {
  const phys = current.items.find(item => item.title.startsWith('PhysTacGen:'));
  const vicon = current.items.find(item => item.title.startsWith('VICON:'));
  assert.equal(phys.links.find(link => link.kind === 'code').status, 'promised');
  assert.equal(vicon.links.find(link => link.kind === 'data').status, 'promised');
  assert.ok(!filterCatalog(current, { query: 'PhysTacGen', resources: ['code'] }).length);
  assert.ok(!filterCatalog(current, { query: 'VICON', resources: ['data'] }).length);
  assert.ok(!filterCatalog(current, { query: 'VICON', resources: ['code'] }).length);
  const touchscale = filterCatalog(current, { query: 'TouchScale', category: 'robotics-applications', year: '2026', resources: ['code', 'data', 'project'] });
  assert.equal(touchscale.length, 1);
  assert.match(touchscale[0].links.find(link => link.kind === 'data').note, /100 hours/);
});

test('search combines title, verified authors, hierarchy, and sourced keywords', () => {
  assert.equal(filterCatalog(current, { query: 'GlowTact optical Adelson', category: 'sensors', year: '2026' }).length, 1);
  assert.equal(filterCatalog(current, { query: 'TACROSS capacitive representation' }).length, 1);
  assert.equal(filterCatalog(current, { query: 'touchscale', year: '2025' }).length, 0);
  assert.ok(filterCatalog(current, { category: 'products', year: 'unknown' }).length > 0);
  const alphabetic = filterCatalog(current, { sort: 'title' }).map(item => item.title);
  assert.deepEqual(alphabetic, [...alphabetic].sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })));
});

test('unsafe URLs are rejected and imported text stays plain untrusted data', () => {
  for (const url of ['javascript:alert(1)', 'data:text/html,test', 'file:///private/a', 'https://user:secret@example.org/', 'https://example.org/\nunsafe']) assert.equal(safeUrl(url), null);
  assert.ok(safeUrl('https://example.org/?x=%3Cscript%3E'));
  const parsed = parseReadme(`## Sensors
- [Unsafe](javascript:alert(1)), Evil, 2026
- [<img src=x onerror=alert(1)> Safe](https://example.org/paper), <b>Researcher</b>, Venue 2026 ([unsafe](data:text/html,x))`);
  assert.equal(parsed.items.length, 1);
  assert.equal(parsed.items[0].title, 'Safe');
  assert.equal(parsed.items[0].authors, 'Researcher');
  assert.equal(parsed.items[0].links.length, 1);
  assert.equal(parsed.warnings.length, 2);
  assert.equal(markdownLinks('[A paper](https://example.org/paper_(camera))')[0].url, 'https://example.org/paper_(camera)');
});

test('metadata requires evidence and accepts stable IDs and original URLs', () => {
  const source = '## Sensors\n- [A paper](https://arxiv.org/pdf/2601.11111), Doe, arxiv 2026';
  const catalog = parseReadme(source);
  assert.throws(() => applyMetadata(catalog, { schemaVersion: 1, items: { 'arxiv:2601.11111': { summary: 'Unsourced claim' } } }), /requires safe HTTP/);
  assert.throws(() => applyMetadata(parseReadme(source), { schemaVersion: 1, items: { 'arxiv:2601.11111': { sources: ['https://arxiv.org/abs/2601.11111'], links: [{ label: 'Bad', kind: 'code', url: 'javascript:alert(1)' }] } } }), /Invalid resource/);
  const enriched = applyMetadata(parseReadme(source), { schemaVersion: 1, items: { 'https://arxiv.org/pdf/2601.11111': { summary: 'Verified explanation', sources: ['https://arxiv.org/abs/2601.11111'] } } });
  assert.equal(enriched.items[0].summary, 'Verified explanation');
  assert.equal(enriched.items[0].metadataSources.length, 1);
  assert.ok(current.items.filter(item => item.summary).length >= 4);
  assert.ok(current.items.filter(item => item.summary).every(item => item.metadataSources.length));
});

test('a README-only weekly addition is automatically imported with missing metadata explicit', () => {
  const next = buildCatalog(`${readme}\n## Future Resource Category\n- [Weekly addition](https://example.org/weekly-new), Researcher, Workshop 2027\n`, { metadata });
  const addition = next.items.find(item => item.title === 'Weekly addition');
  assert.ok(addition);
  assert.equal(next.items.length, current.items.length + 1);
  assert.equal(addition.year, 2027);
  assert.equal(addition.dateAdded, null);
  assert.equal(addition.summary, null);
  assert.equal(addition.abstract, null);
  assert.deepEqual(addition.sensorTechnology, []);
  assert.deepEqual(addition.categories, ['future-resource-category']);
});

test('history parsing records introduction dates separately from publication years', () => {
  const log = `@@AWESOME_TOUCH_DATE:2024-01-02T13:00:00-08:00
+- [Original title](https://arxiv.org/pdf/2301.11111v1.pdf), Doe, arxiv 2023
@@AWESOME_TOUCH_DATE:2026-10-12T08:00:00+08:00
+- [Updated title](https://arxiv.org/abs/2301.11111), Doe, ICRA 2024
+- [Brand new](https://example.org/new), Author, Venue 2020`;
  const dates = parseHistoryDates(log);
  assert.equal(dates.get('arxiv:2301.11111'), '2024-01-02');
  const c = buildCatalog('## Sensors\n- [Updated title](https://arxiv.org/abs/2301.11111), Doe, ICRA 2024', { dates });
  assert.equal(c.items[0].dateAdded, '2024-01-02');
  assert.equal(c.items[0].year, 2024);
});

test('real Git history survives URL edits, category moves, and remove/re-add cycles', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'awesome-touch-history-'));
  const git = (args, date) => execFileSync('git', args, { cwd: directory, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'], env: { ...process.env, GIT_AUTHOR_NAME: 'Test Researcher', GIT_AUTHOR_EMAIL: 'test@example.org', GIT_COMMITTER_NAME: 'Test Researcher', GIT_COMMITTER_EMAIL: 'test@example.org', ...(date ? { GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date } : {}) } });
  const commit = async (text, date) => { await writeFile(join(directory, 'README.md'), text); git(['add', 'README.md']); git(['-c', 'commit.gpgsign=false', 'commit', '-m', 'Update'], date); };
  try {
    git(['init', '--quiet']);
    await commit('## Sensors\n- [A tactile paper](https://arxiv.org/pdf/2301.11111v1), Doe, arxiv 2023\n', '2024-01-02T12:00:00-08:00');
    await commit('## Robotics Applications\n### Manipulation\n- [A tactile paper](https://doi.org/10.1234/tactile), Doe, ICRA 2024\n', '2024-02-03T12:00:00-08:00');
    await commit('## Sensors\n', '2025-03-04T12:00:00-08:00');
    const latest = '## Sensors\n- [A tactile paper](https://doi.org/10.1234/tactile), Doe, ICRA 2024\n- [Uncommitted new addition](https://example.org/uncommitted), Doe, arxiv 2026\n';
    await commit(latest.split('- [Uncommitted')[0], '2026-04-05T12:00:00-07:00');
    await writeFile(join(directory, 'README.md'), latest);
    const history = readHistoryDates(directory);
    assert.equal(history.warning, null);
    const catalog = buildCatalog(latest, { dates: history.dates });
    assert.equal(catalog.items[0].dateAdded, '2024-01-02');
    assert.equal(catalog.items[0].year, 2024);
    assert.equal(catalog.items[1].dateAdded, null);
  } finally { await rm(directory, { recursive: true, force: true }); }
});
