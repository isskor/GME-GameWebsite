const initialState = {
  genres: [],
  platforms: [],
  stores: [],
  sortByList: [
    {
      name: 'Newest',
      value: '-added',
    },
    {
      name: 'Rating',
      value: '-ratings',
    },
    {
      name: 'Released',
      value: '-released',
    },
  ],
  pageList: [
    { name: 12, value: 12 },
    { name: 24, value: 24 },
    { name: 36, value: 36 },
  ],
};

const filterSortAndActive = (arr) => {
  const sortArr = arr.sort((a, b) =>
    a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
  );
  const addActiveArr = sortArr.map((item) => ({ ...item, active: false }));
  return addActiveArr;
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_FILTERS':
      return {
        ...state,
        platforms: filterSortAndActive(action.payload.platforms),
        genres: filterSortAndActive(action.payload.genres),
        stores: filterSortAndActive(action.payload.stores),
      };
    case 'CLEAR_FILTERS':
      return {
        ...state,
        platforms: filterSortAndActive(action.payload.platforms),
        genres: filterSortAndActive(action.payload.genres),
        stores: filterSortAndActive(action.payload.stores),
      };

    default:
      return state;
  }
};

export default filterReducer;
