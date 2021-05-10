const queryString = {
  genres: '&genres=',
  platforms: '&platforms=',
  stores: '&stores=',
  sortBy: '&ordering=',
  pageSize: '&page_size=',
  currentPage: '&page=',
};

const initialState = {
  searchTextInput: '',
  genres: [],
  platforms: [],
  stores: [],
  sortBy: queryString.sortBy + '-added',
  pageSize: queryString.pageSize + 12,
  currentPage: queryString.currentPage + 1,
};

const searchFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_INPUT_CHANGE':
      return {
        ...state,
        searchTextInput: action.payload,
      };
    case 'GENRES_FILTER':
      return {
        ...state,
        genres: queryString.genres + action.payload,
      };
    case 'PLATFORMS_FILTER':
      return {
        ...state,
        platforms: queryString.platforms + action.payload,
      };
    case 'STORES_FILTER':
      return {
        ...state,
        stores: queryString.stores + action.payload,
      };
    case 'SORTBY_FILTER':
      return {
        ...state,
        sortBy: queryString.sortBy + action.payload,
      };
    case 'PAGE_SIZE_FILTER':
      return {
        ...state,
        pageSize: queryString.pageSize + action.payload,
      };
    case 'PAGE_NUMBER':
      return {
        ...state,
        currentPage: queryString.currentPage + action.payload,
      };
    case 'RESET_PAGE':
      return {
        ...state,
        currentPage: queryString.currentPage + 1,
      };
    case 'CLEAR_QUERYSTRING':
      return {
        searchTextInput: '',
        genres: '',
        platforms: '',
        sortBy: queryString.sortBy + '-added',
        pageSize: queryString.pageSize + '12',
        currentPage: queryString.currentPage + 1,
      };
    default:
      return state;
  }
};

export default searchFilterReducer;
