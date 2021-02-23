const base_url = 'https://api.rawg.io/api/';
const API_KEY = process.env.REACT_APP_RAWG_KEY;
// Get Date with 0 base
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  if (month < 10) {
    return `0${month}`;
  }
  console.log(API_KEY);
  return month;
};
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  }
  return day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games

const popular_games = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-ratings_count&page_size=10`;
const upcoming_games = `games?key=${API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const baseGamesURL = () =>
  `https://api.rawg.io/api/genres?key=${API_KEY}&page_size=20`;

// individual Game Detail

export const gameDetailsURLS = (gameId) => `${base_url}games/${gameId}`;
// game screeenshots
export const gameScreenshotURLS = (gameId) =>
  `${base_url}games/${gameId}/screenshots`;

// searched game

export const searchGameURL = (game_name = '') =>
  `${base_url}games?key=${API_KEY}&search=${game_name}&search_precise=true`;

export const getGenresURL = () =>
  `${base_url}genres?key=${API_KEY}&page_size=20`;
export const getPlatformsURL = () =>
  `${base_url}platforms?key=${API_KEY}&page_size=20`;
export const getStoresURL = () =>
  `${base_url}stores?key=${API_KEY}&page_size=20`;
export const getDevURL = () =>
  `${base_url}developers??key=${API_KEY}&page_size=20`;
