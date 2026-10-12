import { defaults, readState, stateSearch, safeUrl, categoryMatches, isLinked, selectItems } from './lib.mjs';

const $ = id => document.getElementById(id);
const repo = 'https://github.com/linchangyi1/Awesome-Touch';
let catalog, state = readState(location.search), limit = 24, selected = [], lastDetailTrigger = null;
const typeName = value => ({ paper:'Paper', thesis:'Thesis', review:'Review', product:'Product', laboratory:'Laboratory', code:'Code', software:'Software', dataset:'Dataset', resource:'Resource' }[value] || String(value).replaceAll('-', ' '));
const node = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text !== undefined && text !== null) el.textContent = String(text); return el; };
function link(label, url, className = '') { const el = node('a', className, label); const safe = safeUrl(url); if (safe) { el.href = safe; el.target = '_blank'; el.rel = 'noopener noreferrer'; } return el; }
function categoryLabel(id) { return catalog.categories.find(category => category.id === id)?.label || id; }
function dateLabel(value) { return value ? new Intl.DateTimeFormat('en', { year:'numeric',month:'short',day:'numeric',timeZone:'UTC' }).format(new Date(`${value.slice(0,10)}T00:00:00Z`)) : 'Date unknown'; }
function stateUrl(overrides = {}) { return `${location.pathname}${stateSearch({ ...state, ...overrides })}`; }
function writeUrl(replace = false) { history[replace ? 'replaceState' : 'pushState']({}, '', stateUrl()); }
function update(patch, replace = false) { state = { ...state, ...patch, item:'' }; limit = 24; writeUrl(replace); render(); }
function clear() { update({ ...defaults, resources:[], view:state.view }); }
function option(value, label) { const el = node('option','',label); el.value = value; return el; }
function topicButton(category, root = false) {
  const count = catalog.items.filter(item => categoryMatches(item,category.id)).length;
  const button = node('button', `category-button${root ? ' category-root' : ''}`, category.label);
  button.dataset.category = category.id; button.append(node('span','',count));
  button.addEventListener('click', () => { update({ category:category.id }); });
  return button;
}
function setupCategories() {
  $('total-count').textContent = catalog.items.length.toLocaleString('en');
  $('all-count').textContent = catalog.items.length.toLocaleString('en');
  $('topic-count').textContent = catalog.categories.filter(c => c.parent).length;
  for (const root of catalog.categories.filter(c => !c.parent)) {
    const children = catalog.categories.filter(c => c.parent === root.id);
    if (children.length) {
      const group = node('details','topic-group'); group.dataset.group = root.id;
      group.open = ['Sensors','Robotics Applications'].includes(root.label);
      const summary = node('summary','',root.label); summary.append(node('span','',catalog.items.filter(item => categoryMatches(item,root.id)).length));
      group.append(summary,topicButton({ ...root,label:`All ${root.label.toLowerCase()}` }));
      for (const child of children) group.append(topicButton(child));
      $('category-tree').append(group);
    } else $('category-tree').append(topicButton(root,true));
    $('category-select').append(option(root.id,root.label));
    for (const child of children) $('category-select').append(option(child.id,`↳ ${child.label}`));
  }
  [...new Set(catalog.items.map(item => item.year).filter(Boolean))].sort((a,b) => b-a).forEach(year => $('year').append(option(String(year),String(year))));
  if (catalog.items.some(item => !item.year)) $('year').append(option('unknown','Year unknown'));
  [...new Set(catalog.items.map(item => item.kind))].sort().forEach(kind => $('kind').append(option(kind,typeName(kind))));
  const sensors = [...new Set(catalog.items.flatMap(item => item.sensorTechnology || []))].sort();
  if (sensors.length) { $('sensor-label').hidden = false; sensors.forEach(sensor => $('sensor').append(option(sensor,sensor))); }
  document.querySelectorAll('[data-shortcut]').forEach(button => button.addEventListener('click', () => {
    const category = catalog.categories.find(c => c.label === button.dataset.shortcut);
    if (category) { update({ category:category.id }); $('results').scrollIntoView({ behavior:'smooth' }); }
  }));
}
function resourceLinks(item, all = false) {
  const wrapper = node('div','resource-links');
  const kinds = new Set();
  for (const resource of item.links) {
    if (!safeUrl(resource.url) || (!all && (!isLinked(resource) || kinds.has(resource.kind)))) continue;
    kinds.add(resource.kind);
    const label = ({paper:'Paper',code:'Code',data:'Data',project:'Project',docs:'Docs',product:'Product',laboratory:'Website',source:'Website'}[resource.kind] || resource.label || 'Resource');
    const anchor = link(all ? `${resource.label || label}${resource.status === 'promised' ? ' (promised)' : ''}` : label,resource.url,'resource-link');
    anchor.append(node('span','','↗')); wrapper.append(anchor);
    if (!all && wrapper.children.length >= 4) break;
  }
  return wrapper;
}
function categoryTags(item, inDetail = false) {
  const wrapper = node('div','card-tags');
  for (const id of item.categories) {
    const button = node('button','tag',categoryLabel(id));
    button.title = catalog.categories.find(c => c.id === id)?.path.join(' → ') || id;
    button.addEventListener('click', () => { if (inDetail) $('detail-dialog').close(); update({ category:id }); if (inDetail) $('results').focus({preventScroll:true}); });
    wrapper.append(button);
  }
  return wrapper;
}
function meta(item) {
  const wrapper = node('div','card-meta'); wrapper.append(node('span','card-year',item.year || 'Year unknown'),node('span','meta-divider'));
  wrapper.append(node('span','',item.venue || 'Venue not listed'),node('span','card-type',typeName(item.kind)));
  return wrapper;
}
function detailAnchor(item, label, className) {
  const anchor = node('a',className,label); anchor.href = stateUrl({item:item.id});
  anchor.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); lastDetailTrigger = anchor; state.item = item.id; writeUrl(); showDetail(item);
  });
  return anchor;
}
function paperCard(item) {
  const article = node('article','paper-card'); article.dataset.id = item.id;
  article.append(meta(item));
  const heading = node('h3'); heading.append(detailAnchor(item,item.title,'')); article.append(heading);
  article.append(node('p','authors',item.authors || (item.kind === 'paper' || item.kind === 'thesis' ? 'Authors not listed' : 'Community resource')));
  if (item.summary) article.append(node('p','summary',item.summary));
  article.append(categoryTags(item));
  const footer = node('div','card-footer'); footer.append(resourceLinks(item),detailAnchor(item,'Details ↗','details-link')); article.append(footer);
  article.append(node('p','added-date',item.dateAdded ? `Added ${dateLabel(item.dateAdded)}` : 'Date added unknown'));
  if (item.availabilityNotes?.length || item.links.some(l => l.status === 'promised')) article.append(node('p','promised-note',item.availabilityNotes?.join(' · ') || 'Some resources are promised; see details.'));
  return article;
}
function activeFilters() {
  $('active-filters').replaceChildren();
  const chips = [];
  if (state.q) chips.push([`Search: ${state.q}`,{q:''}]);
  if (state.category) chips.push([categoryLabel(state.category),{category:''}]);
  if (state.year) chips.push([state.year === 'unknown' ? 'Year unknown' : state.year,{year:''}]);
  for (const kind of state.resources) chips.push([`Has ${kind} link`,{resources:state.resources.filter(value => value !== kind)}]);
  if (state.kind) chips.push([typeName(state.kind),{kind:''}]);
  if (state.sensor) chips.push([state.sensor,{sensor:''}]);
  chips.forEach(([label,patch]) => { const button = node('button','filter-chip',`${label} ×`); button.setAttribute('aria-label',`Remove filter: ${label}`); button.addEventListener('click',() => update(patch)); $('active-filters').append(button); });
  $('reset').hidden = !chips.length;
}
function render() {
  if (!catalog) return;
  $('search').value = state.q;
  for (const id of ['year','sort','kind','sensor']) $(id).value = state[id];
  $('category-select').value = state.category;
  $('all-topics').classList.toggle('active',!state.category);
  $('all-topics').setAttribute('aria-pressed',String(!state.category));
  document.querySelectorAll('[data-category]').forEach(button => { const active = button.dataset.category === state.category; button.classList.toggle('active',active); button.setAttribute('aria-pressed',String(active)); if (active && button.closest('details')) button.closest('details').open = true; });
  document.querySelectorAll('[data-resource]').forEach(button => button.setAttribute('aria-pressed',String(state.resources.includes(button.dataset.resource))));
  $('card-view').setAttribute('aria-pressed',String(state.view === 'cards')); $('list-view').setAttribute('aria-pressed',String(state.view === 'list'));
  $('paper-grid').classList.toggle('list-view',state.view === 'list');
  selected = selectItems(catalog.items,catalog.categories,state);
  const hasFilters = state.q || state.category || state.year || state.kind || state.sensor || state.resources.length;
  $('results-title').textContent = state.category ? categoryLabel(state.category) : state.q ? 'Search results' : hasFilters ? 'Filtered collection' : state.sort === 'added' ? 'Recently added' : 'All research';
  $('result-count').textContent = `${selected.length.toLocaleString('en')} resource${selected.length === 1 ? '' : 's'}${hasFilters ? ` in a collection of ${catalog.items.length.toLocaleString('en')}` : ' · Papers, tools, and more'}`;
  activeFilters();
  const fragment = document.createDocumentFragment(); selected.slice(0,limit).forEach(item => fragment.append(paperCard(item)));
  if (!selected.length) { const empty = node('div','empty-state'); empty.append(node('h3','','No matching research.')); empty.append(node('p','','Try a broader search or remove a filter to explore more of the collection.')); const button = node('button','','Clear search and filters'); button.addEventListener('click',clear); empty.append(button); fragment.append(empty); }
  $('paper-grid').replaceChildren(fragment);
  $('load-more').hidden = selected.length <= limit;
  $('showing-count').textContent = selected.length ? `Showing ${Math.min(limit,selected.length)} of ${selected.length} resources` : '';
  if (state.item) { const item = catalog.items.find(item => item.id === state.item); if (item) showDetail(item); else { state.item = ''; writeUrl(true); } }
}
function showDetail(item) {
  const content = $('detail-content'); content.replaceChildren();
  content.append(node('div','eyebrow',`${typeName(item.kind).toUpperCase()} / AWESOME-TOUCH`));
  const heading = node('h2','',item.title); heading.id = 'detail-title'; content.append(heading,meta(item));
  content.append(node('p','authors',item.authors || 'Authors not listed in the collection'),categoryTags(item,true),resourceLinks(item,true));
  if (item.availabilityNotes?.length) content.append(node('p','promised-note',item.availabilityNotes.join(' · ')));
  if (item.summary) content.append(node('h3','','Summary'),node('p','',item.summary));
  content.append(node('h3','','Abstract'));
  content.append(node('p','',item.abstract || 'An abstract has not been added to this collection. Follow the paper or project link for the original description.'));
  if (item.sensorTechnology?.length) content.append(node('h3','','Verified sensor technology'),node('p','',item.sensorTechnology.join(' · ')));
  if (item.sensorHardware) content.append(node('h3','','Sensor hardware'),node('p','',item.sensorHardware));
  if (item.keywords?.length) content.append(node('h3','','Keywords'),node('p','',item.keywords.join(' · ')));
  const sources = item.metadataSources || item.sources || [];
  if (sources.length) { content.append(node('h3','','Metadata sources')); const ul = node('ul','source-list'); sources.forEach(source => { const li = node('li'); li.append(link(source.label || source.url || source,source.url || source)); ul.append(li); }); content.append(ul); }
  if (item.sourceEntries?.length > 1) {
    content.append(node('h3','','Original collection entries'));
    if (item.alternateTitles?.length) content.append(node('p','', 'These source entries share an identifier, URL, or normalized title. Original titles and category memberships are preserved below.'));
    const list = node('ul','source-list');
    item.sourceEntries.forEach(entry => { const li = node('li'); li.append(link(entry.title,entry.url),node('span','',` · ${categoryLabel(entry.category)}${entry.year ? ` · ${entry.year}` : ''}`)); list.append(li); }); content.append(list);
  }
  content.append(node('p','metadata-note',`${item.dateAdded ? `First added to the collection: ${dateLabel(item.dateAdded)}.` : 'Date added is unknown.'} ${item.year ? `Publication year listed in the README: ${item.year}.` : 'Publication year is not listed.'} Resource links are recorded from the README or cited metadata; their ongoing availability is not guaranteed.`));
  const actions = node('div','detail-actions');
  const copy = node('button','','Copy link'); copy.addEventListener('click',async () => { try { await navigator.clipboard.writeText(location.href); copy.textContent = 'Link copied'; } catch { copy.textContent = 'Copy the URL from your address bar'; } });
  const line = item.sourceLines?.[0]; actions.append(copy,link('View in README ↗',`${repo}/blob/main/README.md${line ? `#L${line}` : ''}`),link('Suggest a correction ↗',`${repo}/issues/new?title=${encodeURIComponent(`Update: ${item.title}`)}`)); content.append(actions);
  if (!$('detail-dialog').open) $('detail-dialog').showModal();
  $('close-detail').focus();
}
function bindControls() {
  $('search-form').addEventListener('submit',event => { event.preventDefault(); update({q:$('search').value}); $('results').scrollIntoView({behavior:'smooth'}); });
  $('search').addEventListener('input',() => update({q:$('search').value},true));
  ['year','sort','kind','sensor'].forEach(id => $(id).addEventListener('change',event => update({[id]:event.target.value})));
  $('category-select').addEventListener('change',event => update({category:event.target.value}));
  $('all-topics').addEventListener('click',() => update({category:''}));
  $('card-view').addEventListener('click',() => update({view:'cards'})); $('list-view').addEventListener('click',() => update({view:'list'}));
  document.querySelectorAll('[data-resource]').forEach(button => button.addEventListener('click',() => { const value = button.dataset.resource; update({resources:state.resources.includes(value) ? state.resources.filter(v => v !== value) : [...state.resources,value]}); }));
  $('reset').addEventListener('click',clear);
  $('load-more').addEventListener('click',() => { const firstNew = limit; limit += 24; render(); const anchor = $('paper-grid').children[firstNew]?.querySelector('h3 a'); anchor?.focus({preventScroll:true}); });
  $('close-detail').addEventListener('click',() => $('detail-dialog').close());
  $('detail-dialog').addEventListener('close',() => { if (state.item) { state.item = ''; writeUrl(true); } if (lastDetailTrigger?.isConnected) lastDetailTrigger.focus({preventScroll:true}); });
  $('about-button').addEventListener('click',() => $('about-dialog').showModal()); $('close-about').addEventListener('click',() => $('about-dialog').close());
  $('topics-nav').addEventListener('click',event => { if (matchMedia('(max-width: 780px)').matches) { event.preventDefault(); $('results').scrollIntoView({behavior:'smooth'}); $('category-select').focus({preventScroll:true}); } });
  document.addEventListener('keydown',event => { if (event.key === '/' && !['INPUT','SELECT','TEXTAREA'].includes(document.activeElement?.tagName) && !$('detail-dialog').open && !$('about-dialog').open) { event.preventDefault(); $('search').focus(); } });
  window.addEventListener('popstate',() => { state = readState(location.search); limit = 24; if (!state.item && $('detail-dialog').open) $('detail-dialog').close(); render(); });
}
try {
  const response = await fetch(new URL('./catalog.json',import.meta.url));
  if (!response.ok) throw new Error(`Catalog request failed (${response.status})`);
  catalog = await response.json();
  if (!Array.isArray(catalog.items) || !Array.isArray(catalog.categories)) throw new Error('Invalid catalog');
  setupCategories(); bindControls(); render();
} catch (error) {
  $('result-count').textContent = 'The collection could not load.';
  const empty = node('div','empty-state'); empty.append(node('h3','','Research is still within reach.'),node('p','','Refresh this page, or browse the complete collection on GitHub.')); empty.append(link('Open the README ↗',`${repo}#readme`,'primary-link')); $('paper-grid').replaceChildren(empty); console.error(error);
}
