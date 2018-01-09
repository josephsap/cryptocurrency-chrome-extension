import { combineReducers } from 'redux';
import coinsReducer from './reducer_coins';
import searchReducer from './reducer_search';
import coinCollectionReducer from './reducer_coin_collection';


const rootReducer = combineReducers({
  coinsReducer,
  searchReducer,
  coinCollectionReducer
});



export default rootReducer;