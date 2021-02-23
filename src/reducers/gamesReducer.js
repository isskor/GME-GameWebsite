const State = {
  popularGames: {
    title: 'Popular Games',
    games: [],
    prev: '',
    next: '',
    isLoading: false,
  },
  upcomingGames: {
    title: 'Upcoming Games',
    games: [],
    prev: '',
    next: '',
    isLoading: false,
  },
  newGames: {
    title: 'New Games',
    games: [],
    prev: '',
    next: '',
    isLoading: false,
  },
  searched: {
    title: 'Searched',
    games: [],
    prev: '',
    next: '',
    count: null,
  },
  showcaseGames: [],
  genres: [],
  platforms: [],
};

const gamesReducer = (state = State, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        showcaseGames: action.payload.upcomingGames,
        popularGames: {
          ...state.popularGames,
          games: action.payload.popularGames,
          prev: action.payload.popularPrev,
          next: action.payload.popularNext,
        },
        upcomingGames: {
          ...state.upcomingGames,
          games: action.payload.upcomingGames,
          prev: action.payload.upcomingPrev,
          next: action.payload.upcomingNext,
        },
        newGames: {
          ...state.newGames,
          games: action.payload.newGames,
          prev: action.payload.newGamesPrev,
          next: action.payload.newGamesNext,
        },
        genres: action.payload.genres,
        platforms: action.payload.platforms,
      };
    case 'POPULAR_CHANGE_PAGE':
      return {
        ...state,
        popularGames: {
          ...state.popularGames,
          games: action.payload.p,
          prev: action.payload.pPrev,
          next: action.payload.pNext,
          isLoading: false,
        },
      };
    case 'UPCOMING_CHANGE_PAGE':
      return {
        ...state,
        upcomingGames: {
          ...state.upcomingGames,
          games: action.payload.p,
          prev: action.payload.pPrev,
          next: action.payload.pNext,
          isLoading: false,
        },
      };
    case 'NEWGAMES_CHANGE_PAGE':
      return {
        ...state,
        newGames: {
          ...state.newGames,
          games: action.payload.p,
          prev: action.payload.pPrev,
          next: action.payload.pNext,
          isLoading: false,
        },
      };
    case 'FETCH_SEARCH':
      return {
        ...state,
        searched: {
          ...state.searched,
          count: action.payload.gameCount,
          games: action.payload.gameSearch,
          prev: action.payload.searchPrev,
          next: action.payload.searchNext,
        },
      };
    case 'SEARCHED_CHANGE_PAGE':
      return {
        ...state,
        searched: {
          ...state.searched,
          games: action.payload.p,
          prev: action.payload.pPrev,
          next: action.payload.pNext,
        },
      };
    case 'LOADING_NEXT_PAGE':
      if (action.payload.title === 'Popular Games') {
        return {
          ...state,
          popularGames: {
            ...state.popularGames,
            isLoading: true,
          },
        };
      }
      if (action.payload.title === 'Upcoming Games') {
        return {
          ...state,
          upcomingGames: {
            ...state.upcomingGames,
            isLoading: true,
          },
        };
      }
      if (action.payload.title === 'New Games') {
        return {
          ...state,
          newGames: {
            ...state.newGames,
            isLoading: true,
          },
        };
      }
      break;
    default:
      return { ...state };
  }
};

export default gamesReducer;
