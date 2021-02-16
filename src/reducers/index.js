import { combineReducers } from 'redux';
import gamesReducer from './gamesReducer';
import gameDetailReducer from './gameDetailReducer';
import searchFilterReducer from './searchReducer';

const rootReducer = combineReducers({
  games: gamesReducer,
  gameDetail: gameDetailReducer,
  filters: searchFilterReducer,
});

export default rootReducer;
