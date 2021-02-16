const GENRES_FILTER = 'GENRES_FILTER';
const SORTBY_FILTER = 'SORTBY_FILTER';
const PAGE_SIZE_FILTER = 'PAGE_SIZE_FILTER';
const PAGE_NUMBER = 'PAGE_NUMBER';
const RESET_PAGE = 'RESET_PAGE';
const CLEAR_ALL_FILTERS = 'CLEAR_ALL_FILTERS';
export const filterGenres = (payload) => ({
  type: GENRES_FILTER,
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
export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
