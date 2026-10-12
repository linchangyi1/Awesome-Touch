export const defaults = { q: '', category: '', year: '', resources: [], sort: 'added', view: 'cards', kind: '', sensor: '', item: '' };
export function readState(search) {
  const params = new URLSearchParams(search);
  return { ...defaults, q: (params.get('q') || '').slice(0, 500), category: params.get('category') || '', year: params.get('year') || '', resources: [...new Set((params.get('resources') || '').split(',').filter(v => ['code','data','project'].includes(v)))], sort: ['added','newest','oldest','title'].includes(params.get('sort')) ? params.get('sort') : 'added', view: params.get('view') === 'list' ? 'list' : 'cards', kind: params.get('kind') || '', sensor: params.get('sensor') || '', item: params.get('item') || '' };
}
export function stateSearch(state) {
  const params = new URLSearchParams();
  for (const key of ['q','category','year','kind','sensor','item']) if (state[key]) params.set(key, state[key]);
  if (state.resources.length) params.set('resources', [...state.resources].sort().join(','));
  if (state.sort !== defaults.sort) params.set('sort', state.sort);
  if (state.view !== defaults.view) params.set('view', state.view);
  return params.size ? `?${params}` : '';
}
export function safeUrl(value) {
  try { const url = new URL(value); return ['https:','http:'].includes(url.protocol) && !url.username && !url.password ? url.href : null; } catch { return null; }
}
export function categoryMatches(item, category) { return !category || item.categories.some(id => id === category || id.startsWith(`${category}/`)); }
export function isLinked(link) { return link.status !== 'promised' && safeUrl(link.url); }
export function selectItems(items, categories, state) {
  const categoryMap = new Map(categories.map(c => [c.id, c]));
  const words = state.q.toLocaleLowerCase().trim().split(/\s+/).filter(Boolean);
  const selected = items.filter(item => {
    if (!categoryMatches(item, state.category) || (state.year && String(item.year ?? 'unknown') !== state.year) || (state.kind && item.kind !== state.kind)) return false;
    if (state.sensor && !(item.sensorTechnology || []).includes(state.sensor)) return false;
    if (!state.resources.every(kind => item.links.some(link => link.kind === kind && isLinked(link)))) return false;
    const text = [item.title,item.authors,item.venue,item.summary,item.abstract,...(item.keywords || []),...(item.aliases || []),...(item.alternateTitles || []),...(item.sourceEntries || []).flatMap(entry => [entry.title,entry.authors,entry.venue]),...item.categories.flatMap(id => categoryMap.get(id)?.path || [])].join(' ').toLocaleLowerCase();
    return words.every(word => text.includes(word));
  });
  const titleSort = (a,b) => a.title.localeCompare(b.title, 'en', { sensitivity:'base' });
  return selected.sort((a,b) => {
    if (state.sort === 'title') return titleSort(a,b);
    if (state.sort === 'newest') return (b.year ?? -Infinity) - (a.year ?? -Infinity) || titleSort(a,b);
    if (state.sort === 'oldest') return (a.year ?? Infinity) - (b.year ?? Infinity) || titleSort(a,b);
    return (b.dateAdded || '').localeCompare(a.dateAdded || '') || (b.year || 0) - (a.year || 0) || titleSort(a,b);
  });
}
