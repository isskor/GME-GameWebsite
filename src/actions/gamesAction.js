import axios from 'axios';
// URLS
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
  // baseGamesURL,
  getGenresURL,
  getPlatformsURL,
  getStoresURL,
} from '../api';

// Actions creator
export const loadGames = () => async (dispatch) => {
  const popular_Games = await axios.get(popularGamesURL());
  const upcoming_Games = await axios.get(upcomingGamesURL());
  const new_Games = await axios.get(newGamesURL());
  // Fetch Data

  // const GamesData = await axios.get(baseGamesURL());

  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popularGames: popular_Games.data.results,
      popularNext: popular_Games.data.next,
      popularPrev: popular_Games.data.previous,
      upcomingGames: upcoming_Games.data.results,
      upcomingNext: upcoming_Games.data.next,
      upcomingPrev: upcoming_Games.data.previous,
      newGames: new_Games.data.results,
      newGamesNext: new_Games.data.next,
      newGamesPrev: new_Games.data.previous,
    },
  });
};

export const loadFilters = () => async (dispatch) => {
  const genres = await axios.get(getGenresURL());
  const platforms = await axios.get(getPlatformsURL());
  const stores = await axios.get(getStoresURL());

  dispatch({
    type: 'FETCH_FILTERS',
    payload: {
      platforms: platforms.data.results,
      genres: genres.data.results,
      stores: stores.data.results,
    },
  });
};

export const nextPage = (list, direction) => async (dispatch) => {
  let typeString;
  if (list.title === 'Popular Games') typeString = 'POPULAR_CHANGE_PAGE';
  if (list.title === 'Upcoming Games') typeString = 'UPCOMING_CHANGE_PAGE';
  if (list.title === 'New Games') typeString = 'NEWGAMES_CHANGE_PAGE';
  if (list.title === 'Searched') typeString = 'SEARCHED_CHANGE_PAGE';

  dispatch({
    type: 'LOADING_NEXT_PAGE',
    payload: list,
  });

  let _Games;
  if (direction === 1) _Games = await axios.get(list.next);
  if (direction === -1) _Games = await axios.get(list.prev);
  // console.log(_Games.data.results);

  dispatch({
    type: typeString,
    payload: {
      p: _Games.data.results,
      pNext: _Games.data.next,
      pPrev: _Games.data.previous,
    },
  });
};

export const fetchSearch = (game_name, ...moreFilters) => async (dispatch) => {
  const searchGamesData = await axios.get(
    `${searchGameURL(game_name)}${moreFilters}`
  );
  // console.log(dispatch);
  // console.log(`${searchGameURL(game_name)}${moreFilters}`);
  dispatch({
    type: 'FETCH_SEARCH',
    payload: {
      gameCount: searchGamesData.data.count,
      gameSearch: searchGamesData.data.results,
      searchNext: searchGamesData.data.next,
      searchPrev: searchGamesData.data.previous,
    },
  });
};
