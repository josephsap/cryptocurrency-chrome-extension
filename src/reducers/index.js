import { combineReducers } from 'redux';
import coinsReducer from './reducer_coins';
import searchReducer from './reducer_search';


const rootReducer = combineReducers({
  coinsReducer,
  searchReducer
});



export default rootReducer;