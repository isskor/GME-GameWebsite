const GENRES_FILTER = 'GENRES_FILTER';
const PLATFORMS_FILTER = 'PLATFORMS_FILTER';
const STORES_FILTER = 'STORES_FILTER';
const SORTBY_FILTER = 'SORTBY_FILTER';
const PAGE_SIZE_FILTER = 'PAGE_SIZE_FILTER';
const PAGE_NUMBER = 'PAGE_NUMBER';
const RESET_PAGE = 'RESET_PAGE';
const CLEAR_FILTERS = 'CLEAR_FILTERS';
const CLEAR_QUERYSTRING = 'CLEAR_QUERYSTRING';
const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const searchInput = (payload) => ({
  type: SEARCH_INPUT_CHANGE,
  payload,
});

export const filterGenres = (payload) => ({
  type: GENRES_FILTER,
  payload,
});
export const filterPlatforms = (payload) => ({
  type: PLATFORMS_FILTER,
  payload,
});
export const filterStores = (payload) => ({
  type: STORES_FILTER,
  payload,
});
export const filterSortBy = (payload) => ({
  type: SORTBY_FILTER,
  payload,
});
export const filterPageSize = (payload) => ({
  type: PAGE_SIZE_FILTER,
  payload,
});
export const pageNumber = (payload) => ({
  type: PAGE_NUMBER,
  payload,
});
export const resetPageNumber = () => ({
  type: RESET_PAGE,
});
export const clearAllFilters = (payload) => ({
  type: CLEAR_FILTERS,
  payload,
});
export const clearQueryString = () => ({
  type: CLEAR_QUERYSTRING,
});
