import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import gameDetailReducer from './gameDetailReducer';
import searchFilterReducer from './searchReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetail: gameDetailReducer,
  filters: searchFilterReducer,
  f: filterReducer,
});

export default rootReducer;
