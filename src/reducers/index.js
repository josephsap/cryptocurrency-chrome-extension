import { combineReducers } from 'redux';
// import coinsReducer from './reducer_coins';
import searchReducer from './reducer_search';
import apiReducer from './reducer_api';


const rootReducer = combineReducers({
  apiReducer,
  searchReducer
});



export default rootReducer;