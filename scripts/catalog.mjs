import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

export const LINK_KINDS = ['paper', 'code', 'data', 'project', 'docs', 'product', 'laboratory', 'source'];
export const LINK_STATUSES = ['linked', 'promised'];
const excludedSections = new Set(['table of contents', 'citation', 'references']);
const sha = value => createHash('sha256').update(value).digest('hex').slice(0, 16);

export function plainText(value = '') {
  return String(value).replace(/\\([\\`*_{}[\]()#+.!-])/g, '$1')
    .replace(/<[^>]*>/g, '').replace(/`([^`]+)`/g, '$1')
    .replace(/(\*\*|__)(.+?)\1/g, '$2').replace(/(^|\s)([*_])([^*_]+)\2(?=\s|$)/g, '$1$3')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
}

export function normalizeTitle(title) {
  return plainText(title).normalize('NFKD').replace(/\p{M}/gu, '')
    .toLocaleLowerCase('en').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function slug(value) {
  return normalizeTitle(value).replace(/\s+/g, '-');
}

export function safeUrl(value) {
  if (typeof value !== 'string' || /[\u0000-\u001f\u007f]/u.test(value)) return null;
  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) return null;
    return value;
  } catch { return null; }
}

export function paperIdentifier(value) {
  if (!safeUrl(value)) return null;
  const url = new URL(value);
  const host = url.hostname.toLowerCase().replace(/^www\./, '');
  const path = decodeURIComponent(url.pathname);
  if (/(^|\.)arxiv\.org$/.test(host)) {
    const id = path.match(/^\/(?:abs|pdf|html)\/(.+?)(?:v\d+)?(?:\.pdf)?\/?$/i)?.[1];
    if (id && /^(?:\d{4}\.\d{4,5}|[a-z.-]+\/\d{7})$/i.test(id)) return `arxiv:${id.toLowerCase()}`;
  }
  const doi = host === 'doi.org' || host === 'dx.doi.org'
    ? path.slice(1) : path.match(/\/(?:doi\/(?:abs\/|full\/|pdf\/)?|article\/)(10\.\d{4,9}\/[^?#]+)/i)?.[1];
  if (doi && /^10\.\d{4,9}\//.test(doi)) return `doi:${doi.replace(/\/$/, '').toLowerCase()}`;
  if (host === 'ieeexplore.ieee.org') {
    const id = path.match(/\/document\/(\d+)/)?.[1] || url.searchParams.get('arnumber');
    if (id && /^\d+$/.test(id)) return `ieee:${id}`;
  }
  return null;
}

export function canonicalizeUrl(value) {
  if (!safeUrl(value)) return null;
  const identifier = paperIdentifier(value);
  if (identifier?.startsWith('arxiv:')) return `https://arxiv.org/abs/${identifier.slice(6)}`;
  if (identifier?.startsWith('doi:')) return `https://doi.org/${identifier.slice(4)}`;
  if (identifier?.startsWith('ieee:')) return `https://ieeexplore.ieee.org/document/${identifier.slice(5)}`;
  const url = new URL(value);
  url.hostname = url.hostname.toLowerCase().replace(/^www\./, '');
  url.hash = '';
  for (const key of [...url.searchParams.keys()]) {
    if (/^(utm_.+|fbclid|gclid|casa_token|tag)$/i.test(key)) url.searchParams.delete(key);
  }
  url.searchParams.sort();
  // HTTP and HTTPS links identify the same resource; keep the original URL in links.
  url.protocol = 'https:';
  url.pathname = url.pathname.replace(/\/+$/, '') || '/';
  return url.href;
}

/** Small Markdown link reader with balanced parentheses in URLs. It never emits HTML. */
export function markdownLinks(text) {
  const links = [];
  const start = /(?<!!)\[((?:\\.|[^\]\\])+)\]\(/g;
  let match;
  while ((match = start.exec(text))) {
    let cursor = start.lastIndex;
    const beginning = cursor;
    let depth = 1;
    for (; cursor < text.length && depth; cursor++) {
      if (text[cursor] === '\\') { cursor++; continue; }
      if (text[cursor] === '(') depth++;
      else if (text[cursor] === ')') depth--;
    }
    if (depth) continue;
    const destination = text.slice(beginning, cursor - 1).trim();
    const url = destination.startsWith('<') ? destination.match(/^<([^>]+)>/)?.[1]
      : destination.replace(/\s+["'][^]*$/, '');
    links.push({ label: plainText(match[1]), url: url?.replace(/\\([()])/g, '$1'), start: match.index, end: cursor });
    start.lastIndex = cursor;
  }
  return links;
}

function citation(text) {
  const yearMatch = [...text.matchAll(/\b((?:19|20)\d{2})\b/g)].at(-1);
  const year = yearMatch ? Number(yearMatch[1]) : null;
  const preceding = yearMatch ? text.slice(0, yearMatch.index) : text;
  const clean = plainText(preceding).replace(/^[\s,;]+|[\s,;—-]+$/g, '');
  const parts = clean.split(',').map(part => part.trim()).filter(Boolean);
  if (!yearMatch) return { authors: '', year: null, venue: null };
  return { authors: parts[0] || '', year, venue: parts.slice(1).join(', ') || null };
}

function entryKind(category, primary, year) {
  const root = category.path[0];
  if (root === 'Thesis') return 'thesis';
  if (root === 'Products') return 'product';
  if (root === 'Laboratory') return 'laboratory';
  if (root === 'Open-Source' || root === 'Open Source') {
    if (category.label === 'Dataset') return 'dataset';
    return paperIdentifier(primary) ? 'paper' : 'code';
  }
  if (year || paperIdentifier(primary)) return 'paper';
  if (category.label === 'Dataset') return 'dataset';
  return 'resource';
}

function linkKind(link, itemKind, category, primary) {
  const label = link.label.toLowerCase();
  if (!primary) {
    if (/\b(code|repo|repository|github)\b/.test(label)) return 'code';
    if (/\b(data|dataset|benchmark)\b/.test(label)) return 'data';
    if (/\b(project|website|homepage)\b/.test(label)) return 'project';
    if (/\b(docs?|documentation)\b/.test(label)) return 'docs';
    if (/\b(paper|pdf|arxiv)\b/.test(label)) return 'paper';
    return 'source';
  }
  if (itemKind === 'product') return 'product';
  if (itemKind === 'laboratory') return 'laboratory';
  if (paperIdentifier(link.url) || /\.(pdf)(?:$|[?#])/i.test(link.url)) return 'paper';
  if (itemKind === 'dataset') return 'data';
  if (/^https?:\/\/(?:www\.)?github\.com\//i.test(link.url)) return 'code';
  if (/\.github\.io(?:\/|$)/i.test(link.url) || itemKind === 'code') return 'project';
  return itemKind === 'paper' || itemKind === 'thesis' ? 'paper' : 'source';
}

function readEntry(raw, line, category, warnings) {
  const found = markdownLinks(raw);
  const links = found.filter(link => safeUrl(link.url));
  for (const link of found) {
    if (link.url && !link.url.startsWith('#') && !safeUrl(link.url)) warnings.push(`Skipped unsafe or unsupported URL at README line ${line}.`);
  }
  if (!links.length) return null;
  const primary = links[0];
  const afterTitle = raw.slice(primary.end);
  const citationText = afterTitle.replace(/\[[^\]]*\]\([^]*?\)/g, '').split(/\s(?:—|–)\s|\s\(/)[0];
  const { authors, year, venue } = citation(citationText);
  const kind = entryKind(category, primary.url, year);
  const availabilityNotes = [];
  for (const match of raw.matchAll(/\b(code|data|dataset)\s+(?:is\s+)?(pending|coming soon|to be released|not yet released)/gi)) {
    availabilityNotes.push(`${match[1].toLowerCase()} ${match[2].toLowerCase()}`);
  }
  const itemLinks = links.map((link, index) => {
    let resourceKind = linkKind(link, kind, category, index === 0);
    // A placeholder dataset repository is not evidence of a released code resource.
    if (index > 0 && /^(?:repo|repository)$/i.test(link.label) && availabilityNotes.some(note => /^(?:data|dataset) /.test(note))) resourceKind = 'data';
    const promised = availabilityNotes.some(note => note.startsWith(resourceKind === 'data' ? 'data' : resourceKind));
    const label = index === 0 ? ({ paper: 'Paper', code: 'Code', data: 'Data', project: 'Project', product: 'Product', laboratory: 'Laboratory', source: 'Website' })[resourceKind] : link.label;
    return { label, url: link.url, kind: resourceKind, status: promised ? 'promised' : 'linked', originalLabel: link.label };
  });
  return {
    id: paperIdentifier(primary.url) || `url:${sha(canonicalizeUrl(primary.url))}`,
    title: primary.label, authors, year, venue, kind,
    categories: [category.id], links: itemLinks,
    summary: null, abstract: null, keywords: [], sensorTechnology: [], metadataSources: [],
    dateAdded: null, sourceLines: [line], alternateTitles: [], availabilityNotes,
    sourceEntries: [{ title: primary.label, authors, year, venue, category: category.id, line, url: primary.url }],
  };
}

function identityKeys(item, categoryMap) {
  const primaryUrls = item.sourceEntries.map(entry => entry.url);
  const keys = primaryUrls.flatMap(url => [paperIdentifier(url), `url:${canonicalizeUrl(url)}`]).filter(Boolean);
  const research = ['paper', 'thesis'].includes(item.kind);
  const roots = [...new Set(item.categories.map(id => categoryMap.get(id)?.path[0]))];
  for (const title of [item.title, ...item.alternateTitles]) {
    // Product and implementation names such as “BioTac” do not identify a paper.
    keys.push(`title:${research ? 'research' : roots.join('|')}:${normalizeTitle(title)}`);
  }
  return keys;
}

function mergeItems(a, b) {
  a.categories = [...new Set([...a.categories, ...b.categories])];
  a.sourceLines = [...new Set([...a.sourceLines, ...b.sourceLines])].sort((x, y) => x - y);
  a.sourceEntries.push(...b.sourceEntries);
  a.alternateTitles = [...new Set([...a.alternateTitles, ...b.alternateTitles, ...(a.title !== b.title ? [b.title] : [])])];
  a.availabilityNotes = [...new Set([...a.availabilityNotes, ...b.availabilityNotes])];
  for (const link of b.links) {
    if (!a.links.some(old => old.url === link.url && old.kind === link.kind && old.status === link.status)) a.links.push(link);
  }
  if (!a.authors && b.authors) a.authors = b.authors;
  if (!a.year && b.year) a.year = b.year;
  if (!a.venue && b.venue) a.venue = b.venue;
  if (a.kind !== 'paper' && b.kind === 'paper') a.kind = 'paper';
  if (!paperIdentifier(a.sourceEntries[0].url) && paperIdentifier(b.sourceEntries[0].url)) a.id = paperIdentifier(b.sourceEntries[0].url);
  return a;
}

export function parseReadme(markdown) {
  const warnings = [];
  const categories = [];
  const categoryMap = new Map();
  const rawItems = [];
  const lines = String(markdown).replace(/<!--[\s\S]*?-->/g, value => value.replace(/[^\n]/g, '')).split(/\r?\n/);
  let stack = [];
  let ignored = true;
  let inFence = false;
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; continue; }
    if (inFence) continue;
    const heading = line.match(/^(#{2,6})\s+(.+?)(?:\s+#+)?\s*$/);
    if (heading) {
      const level = heading[1].length;
      const label = plainText(heading[2]);
      if (level === 2) { ignored = excludedSections.has(label.toLowerCase()); stack = []; }
      if (ignored) continue;
      stack = stack.filter(category => category.level < level);
      const parent = stack.at(-1);
      const id = `${parent ? `${parent.id}/` : ''}${slug(label)}`;
      let category = categoryMap.get(id);
      if (!category) {
        category = { id, label, parent: parent?.id || null, path: [...(parent?.path || []), label] };
        categoryMap.set(id, category); categories.push(category);
      }
      stack.push({ ...category, level });
      continue;
    }
    if (ignored || !stack.length || !/^\s*[-*+]\s+/.test(line)) continue;
    let raw = line.replace(/^\s*[-*+]\s+/, '');
    const sourceLine = index + 1;
    while (index + 1 < lines.length && /^\s{2,}\S/.test(lines[index + 1]) && !/^\s*[-*+]\s+/.test(lines[index + 1])) raw += ` ${lines[++index].trim()}`;
    const item = readEntry(raw, sourceLine, stack.at(-1), warnings);
    if (item) rawItems.push(item);
  }
  const groups = new Map();
  const keyOwners = new Map();
  for (const item of rawItems) {
    const keys = identityKeys(item, categoryMap);
    const matches = [...new Set(keys.map(key => keyOwners.get(key)).filter(Boolean))];
    let target = matches.shift();
    if (!target) { target = item; groups.set(target, true); }
    else mergeItems(target, item);
    // A title alias can bridge formerly separate URL identities.
    for (const other of matches) {
      if (other === target) continue;
      mergeItems(target, other); groups.delete(other);
      for (const [key, owner] of keyOwners) if (owner === other) keyOwners.set(key, target);
    }
    for (const key of [...keys, ...identityKeys(target, categoryMap)]) keyOwners.set(key, target);
  }
  const items = [...groups.keys()];
  for (const item of items) {
    item.aliases = identityKeys(item, categoryMap);
    const distinctTitles = new Set([item.title, ...item.alternateTitles].map(normalizeTitle));
    if (distinctTitles.size > 1 && paperIdentifier(item.sourceEntries[0].url)) warnings.push(`Shared paper identity with differing titles: ${item.id}. Original citations are retained in sourceEntries.`);
  }
  return { items, categories, warnings, stats: { sourceEntries: rawItems.length, uniqueItems: items.length, duplicatesMerged: rawItems.length - items.length, categories: categories.length } };
}

/** Read dates from added README lines; moves, citation edits, and re-additions retain the first known introduction. */
export function parseHistoryDates(log) {
  const dates = new Map();
  let date = null;
  for (const line of log.split(/\r?\n/)) {
    if (line.startsWith('@@AWESOME_TOUCH_DATE:')) { date = line.slice(21).slice(0, 10); continue; }
    if (!date || !line.startsWith('+') || line.startsWith('+++')) continue;
    const raw = line.slice(1).replace(/^\s*[-*+]\s+/, '');
    const primary = markdownLinks(raw).find(link => safeUrl(link.url));
    if (!primary) continue;
    const keys = [paperIdentifier(primary.url), `url:${canonicalizeUrl(primary.url)}`];
    const { year } = citation(raw.slice(primary.end));
    if (year) keys.push(`title:research:${normalizeTitle(primary.label)}`);
    for (const key of keys.filter(Boolean)) if (!dates.has(key)) dates.set(key, date);
  }
  return dates;
}

export function readHistoryDates(cwd, readmePath = 'README.md') {
  try {
    const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim() === 'true';
    if (shallow) return { dates: new Map(), warning: 'Git history is shallow; date added is unavailable. Build with full history (fetch-depth: 0).' };
    const log = execFileSync('git', ['log', '--reverse', '--format=@@AWESOME_TOUCH_DATE:%cI', '--no-ext-diff', '--unified=0', '-p', '--', readmePath], { cwd, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
    return { dates: parseHistoryDates(log), warning: null };
  } catch { return { dates: new Map(), warning: 'Git history is unavailable; date added is shown as unknown.' }; }
}

export function applyMetadata(catalog, metadata = { schemaVersion: 1, items: {} }) {
  if (metadata.schemaVersion !== 1 || !metadata.items || typeof metadata.items !== 'object' || Array.isArray(metadata.items)) throw new Error('metadata.json must contain schemaVersion: 1 and an items object.');
  const consumed = new Set();
  for (const item of catalog.items) {
    const urls = item.sourceEntries.flatMap(entry => [entry.url, canonicalizeUrl(entry.url)]);
    const matchedKeys = [...new Set([item.id, ...urls])].filter(key => Object.hasOwn(metadata.items, key));
    for (const key of matchedKeys) {
      const extra = metadata.items[key]; consumed.add(key);
      if (!extra || typeof extra !== 'object' || Array.isArray(extra)) throw new Error(`Metadata for ${key} must be an object.`);
      const sources = (extra.sources || []).map(source => typeof source === 'string' ? { label: 'Source', url: source } : source);
      if (!sources.length || sources.some(source => !safeUrl(source?.url))) throw new Error(`Metadata for ${key} requires safe HTTP(S) sources.`);
      for (const field of ['summary', 'abstract', 'authors', 'sensorHardware']) {
        if (extra[field] !== undefined && extra[field] !== null) {
          const value = Array.isArray(extra[field]) && field === 'authors' ? extra[field].join(', ') : extra[field];
          if (typeof value !== 'string') throw new Error(`${field} metadata for ${key} must be text.`);
          item[field] = value.trim();
        }
      }
      for (const field of ['keywords', 'sensorTechnology']) {
        if (extra[field] === undefined || extra[field] === null) continue;
        if (!Array.isArray(extra[field]) || extra[field].some(value => typeof value !== 'string')) throw new Error(`${field} metadata for ${key} must be a text array.`);
        item[field] = [...new Set([...(item[field] || []), ...extra[field].map(value => value.trim()).filter(Boolean)])];
      }
      if (extra.availabilityNotes !== undefined) {
        if (!Array.isArray(extra.availabilityNotes) || extra.availabilityNotes.some(value => typeof value !== 'string')) throw new Error(`availabilityNotes metadata for ${key} must be a text array.`);
        item.availabilityNotes = [...new Set([...item.availabilityNotes, ...extra.availabilityNotes])];
      }
      for (const link of extra.links || []) {
        if (!safeUrl(link?.url) || !LINK_KINDS.includes(link.kind) || !LINK_STATUSES.includes(link.status || 'linked') || typeof link.label !== 'string') throw new Error(`Invalid resource link metadata for ${key}.`);
        const clean = { label: link.label, url: link.url, kind: link.kind, status: link.status || 'linked' };
        if (typeof link.note === 'string') clean.note = link.note;
        if (!item.links.some(old => old.url === clean.url && old.kind === clean.kind && old.status === clean.status)) item.links.push(clean);
      }
      item.metadataSources.push(...sources.map(source => ({ label: typeof source.label === 'string' ? source.label : 'Source', url: source.url })));
    }
  }
  for (const key of Object.keys(metadata.items)) if (!consumed.has(key)) catalog.warnings.push(`Metadata key does not match a current README entry: ${key}`);
  return catalog;
}

export function buildCatalog(markdown, { metadata, dates = new Map(), historyWarning = null, generatedAt = new Date().toISOString(), revision = null } = {}) {
  const catalog = parseReadme(markdown);
  for (const item of catalog.items) {
    const known = item.aliases.map(alias => dates.get(alias)).filter(Boolean).sort();
    item.dateAdded = known[0] || null;
  }
  if (historyWarning) catalog.warnings.push(historyWarning);
  applyMetadata(catalog, metadata);
  return { schemaVersion: 1, repository: 'https://github.com/linchangyi1/Awesome-Touch', revision, generatedAt, dateAddedSource: 'First introduction in full README Git history, using the commit’s committer calendar date; unknown when unavailable.', ...catalog };
}

/** Query helper also used by tests. Category filters include descendants; resource filters are combined AND conditions. */
export function filterCatalog(catalog, { query = '', category = '', year = '', resources = [], sort = 'added' } = {}) {
  const categoryMap = new Map(catalog.categories.map(value => [value.id, value]));
  const terms = normalizeTitle(query).split(' ').filter(Boolean);
  const result = catalog.items.filter(item => {
    const haystack = normalizeTitle([item.title, ...item.alternateTitles, item.authors, item.summary, item.abstract, ...item.keywords, ...item.sensorTechnology, ...item.categories.flatMap(id => categoryMap.get(id)?.path || [])].filter(Boolean).join(' '));
    return terms.every(term => haystack.includes(term))
      && (!category || item.categories.some(id => id === category || id.startsWith(`${category}/`)))
      && (!year || (year === 'unknown' ? item.year === null : item.year === Number(year)))
      && resources.every(kind => item.links.some(link => link.kind === kind && link.status !== 'promised'));
  });
  return result.sort((a, b) => {
    if (sort === 'title') return a.title.localeCompare(b.title, 'en', { sensitivity: 'base' });
    if (sort === 'year') return (b.year || 0) - (a.year || 0) || a.title.localeCompare(b.title);
    return (b.dateAdded || '').localeCompare(a.dateAdded || '') || a.title.localeCompare(b.title);
  });
}
