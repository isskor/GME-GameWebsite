const initialState = {
  genres: [],
  sortBy: '&ordering=-added',
  pageSize: '&page_size=10',
  currentPage: '&page=1',
};

const searchFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GENRES_FILTER':
      return {
        ...state,
        genres: '&genres=' + action.payload,
      };
    case 'SORTBY_FILTER':
      return {
        ...state,
        sortBy: '&ordering=' + action.payload,
      };
    case 'PAGE_SIZE_FILTER':
      return {
        ...state,
        pageSize: '&page_size=' + action.payload,
      };
    case 'PAGE_NUMBER':
      return {
        ...state,
        currentPage: '&page=' + action.payload,
      };
    case 'RESET_PAGE':
      return {
        ...state,
        currentPage: '&page=' + 1,
      };
    case 'CLEAR_ALL_FILTERS':
      return {
        genres: [],
        sortBy: '&ordering=-added',
        pageSize: '&page_size=10',
        currentPage: '&page=1',
      };
    default:
      return state;
  }
};

export default searchFilterReducer;
