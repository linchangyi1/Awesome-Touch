import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { buildCatalog, readHistoryDates } from './catalog.mjs';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, 'site');
const destination = join(root, 'dist');
const base = `/${(process.env.BASE_PATH || '/Awesome-Touch/').replace(/^\/+|\/+$/g, '')}/`.replace(/^\/\/$/, '/');
if (!/^\/[a-zA-Z0-9_./-]*\/$/.test(base) && base !== '/') throw new Error('BASE_PATH must be a URL path, such as /Awesome-Touch/.');

const [readme, metadataText] = await Promise.all([readFile(join(root, 'README.md'), 'utf8'), readFile(join(source, 'metadata.json'), 'utf8')]);
const history = readHistoryDates(root);
let revision = null;
try { revision = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { /* Source archives have no commit reference. */ }
const catalog = buildCatalog(readme, { metadata: JSON.parse(metadataText), dates: history.dates, historyWarning: history.warning, revision });
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });

async function copyPublic(directory, relative = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    const target = join(destination, relative, entry.name);
    if (relative === '' && entry.name === 'metadata.json') continue;
    if (entry.isSymbolicLink()) throw new Error(`Site public assets must not be symbolic links: ${path}`);
    if (entry.isDirectory()) {
      await mkdir(target, { recursive: true });
      await copyPublic(path, join(relative, entry.name));
    } else if (/\.(?:html|css|js|mjs|json|svg|txt|xml|webmanifest)$/i.test(entry.name)) {
      const text = await readFile(path, 'utf8');
      await writeFile(target, text.replaceAll('__BASE_PATH__', base));
    } else await cp(path, target);
  }
}
await copyPublic(source);
await writeFile(join(destination, 'catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`);
await writeFile(join(destination, '.nojekyll'), '');
console.log(`Built ${catalog.items.length} entries from ${catalog.stats.sourceEntries} README citations across ${catalog.categories.length} categories at ${base}`);
for (const warning of catalog.warnings) console.warn(`Catalog: ${warning}`);
