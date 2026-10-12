# Maintaining the Awesome-Touch website

The [research website](https://linchangyi1.github.io/Awesome-Touch/) is generated from [README.md](../README.md). Continue curating the README as usual: a relevant push to `main` automatically rebuilds and publishes the website. No second catalog needs to be maintained.

## Source files

| File | Purpose |
| --- | --- |
| `README.md` | Authoritative collection, category hierarchy, bibliographic text, and original resource links |
| `site/metadata.json` | Optional, sourced summaries, abstracts, keywords, sensor technologies, and extra links |
| `scripts/` | README parser, deduplication, history lookup, and static build |
| `site/` | Browser interface, styles, and static assets |
| `tests/` | Catalog and browser search regression checks |
| `.github/workflows/pages.yml` | Validation and GitHub Pages publication |
| `dist/` | Generated deployment output; ignored by Git |

The site uses plain JavaScript and Node.js built-ins. There is no dependency installation, external search service, API key, login, or database.

## Weekly additions and corrections

1. Add or correct entries under the appropriate README headings, preserving the existing Markdown list format and original links. Hardware papers, datasets, software, products, open-source projects, and laboratories all belong in the collection.
2. Put an entry in more than one relevant section when needed. The build combines matching entries while retaining every category membership.
3. Run the tests and build below. Check the build's import warnings and inspect representative new entries in the generated catalog and website.
4. Commit and push the source changes. The **Research website** workflow runs for changes to the README, `site/`, `scripts/`, `tests/`, `package.json`, and the workflow itself. Pull requests validate the site; publication happens only from a push to `main` or a manual run on `main`.
5. Confirm that both **Validate and build** and **Publish GitHub Pages** succeed in [Actions](https://github.com/linchangyi1/Awesome-Touch/actions/workflows/pages.yml).

Do not edit `dist/catalog.json` to fix data. Make bibliographic or category changes in the README and verified enrichment changes in `site/metadata.json`, then rebuild.

## Metadata, identity, and evidence

Catalog entries have stable IDs where the source supports them, such as `arxiv:2610.03333`, `doi:…`, or `ieee:…`. Deduplication considers these paper identities, canonical URLs, and normalized research titles. It retains the source links and category memberships. Resource entries are kept separate where an identical short name could refer to a product, repository, or laboratory.

Optional enrichment is keyed by the generated entry ID, the original primary URL, or its canonical URL. Find the entry's current `id` in `dist/catalog.json` before adding an enrichment record. The metadata file has this top-level structure:

```json
{
  "schemaVersion": 1,
  "items": {}
}
```

Each record inside `items` can contain:

| Field | Accepted content |
| --- | --- |
| `summary` | A short, verified description |
| `abstract` | A sourced abstract, with appropriate attribution and reuse rights |
| `keywords` | An array of supported terms |
| `sensorTechnology` | An array of verified technologies, such as optical or capacitive |
| `sensorHardware` | A sourced description of the sensor hardware |
| `authors` | A verified full author string when the README abbreviates it |
| `links` | An array of objects with `label`, `url`, `kind`, and `status` |
| `sources` | An array of evidence links with `label` and `url`; required for enrichment |

Supported extra-link kinds are `paper`, `code`, `data`, `project`, `docs`, `product`, `laboratory`, and `source`. Link status is `linked` or `promised`. Use `promised` when the source only announces a future release. A `linked` URL means the source lists a direct resource link; it is not a fresh audit of the project's contents, license, or completeness. Promised resources must not count as available links in the filters.

Authors, publication year, and venue come from the README; sourced enrichment can expand abbreviated authors. Correct bibliographic errors in the README. Unknown metadata remains missing and is displayed accordingly. Do not derive a publication date from an arXiv identifier or a repository commit, infer sensor specifications from a title, manufacture an abstract, or turn a promised release into a code/data availability claim. Sensor technology filters are intentionally partial: absence of a tag means unclassified.

Prefer a paper's primary publication, the authors' project page, or its linked repository as evidence. Keep evidence links beside enrichment so a maintainer can verify it later. Only safe HTTP and HTTPS URLs become clickable external links. Canonicalization helps match equivalent paper URLs; the catalog also preserves original source URLs. README and metadata strings are untrusted input and must be rendered as text, with explicit safe URL checks, never executed or inserted as raw HTML.

## Publication year versus date added

**Publication year** is bibliographic metadata from the README. **Date added** is the date of the earliest README introduction found in Git history, matched using stable paper identity, canonical URL, or normalized research-title aliases. It records when the collection first tracked an entry, not when the work was published. Recent additions may therefore be older papers. Category moves and duplicate memberships should not reset it.

Dates use the introduction commit's recorded calendar date. Entries already present in the earliest tracked README are dated to that commit; the repository cannot establish an earlier curation date. A new, uncommitted entry has no introduction date until it is committed. When history is missing or shallow, dates remain unknown and the build warns instead of assigning today's date. Clone with full history or run `git fetch --unshallow` in an existing shallow checkout. The workflow uses `fetch-depth: 0` for this reason.

## Build and preview locally

Use Node.js 22 or newer and Git. GitHub Actions uses Node.js 24. Run from the repository root:

```sh
npm test
npm run build
```

The same commands without npm are:

```sh
node --test tests/*.test.mjs
node scripts/build.mjs
```

The build writes the static files to `dist/`. Its default base path is `/Awesome-Touch/`; `BASE_PATH` can override it for another deployment. To preview the actual GitHub Pages subpath using Python 3 on macOS or Linux:

```sh
mkdir -p work/preview
ln -sfn ../../dist work/preview/Awesome-Touch
python3 -m http.server 8000 --bind 127.0.0.1 --directory work/preview
```

Open [http://127.0.0.1:8000/Awesome-Touch/](http://127.0.0.1:8000/Awesome-Touch/). Stop the server with Ctrl-C. The preview mount exists only under ignored `work/`; the workflow uploads `dist/` directly to Pages.

Check desktop and mobile layouts, long titles, keyboard focus, combined category/year/resource filters, sorting, card/list switching, and the empty-results state. Copy a filtered URL into a new tab to check that search state restores. Open details and representative entries from every major README section, including non-paper resources. Inspect the browser network panel for missing assets under `/Awesome-Touch/` and check that promised releases are clearly identified. External links can become unavailable independently of the site build; inspect changed resource links during curation.

## GitHub Pages setup and troubleshooting

One-time setup requires repository admin or maintainer access. In [repository Settings → Pages](https://github.com/linchangyi1/Awesome-Touch/settings/pages), select **GitHub Actions** under **Build and deployment → Source**. This enables custom-workflow publication; see [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow). The source files and workflow must be on `main`.

Run **Research website → Run workflow → main** in Actions to publish without another source edit. The workflow tests and builds before uploading a Pages artifact, then deploys through the `github-pages` environment. It grants read access to repository contents and grants Pages and identity-token write permissions only to the deployment job. The official actions are pinned to full commit SHAs; review their official release notes when updating those pins.

The intended live address is [https://linchangyi1.github.io/Awesome-Touch/](https://linchangyi1.github.io/Awesome-Touch/). A successful local build alone does not confirm deployment. Check the workflow's deployment output and open the live site after publication.

If configuration or deployment reports that the Pages site does not exist, confirm that the Source setting above is enabled. If a run waits for approval, check the `github-pages` environment's protection rules. Organization or repository Actions policies may also need to allow the pinned official actions. For missing data or broken layouts, inspect the build job first; for a publication failure after a successful build, inspect the deploy job and Pages settings. Do not add secrets to the website or commit generated output to work around a deployment permission error.
