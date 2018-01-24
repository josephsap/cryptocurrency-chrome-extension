import { REQUEST_COINS, RECEIVE_COINS, ADD_COIN, DELETE_COIN } from '../constants';

export default function coinsReducer(
  state = {
    isFetching: false,
    coins: [],
    coinCollection: []
  }, 
  action
) {
  switch (action.type) {
    case REQUEST_COINS:
      return { ...state, isFetching: true };

    case RECEIVE_COINS:
      return { ...state, isFetching: false, coins: action.coins };
      
    case ADD_COIN:
      return { ...state, coinCollection: [...state.coinCollection,  action.selectedCoin] };

    case DELETE_COIN:
      // console.log(state.coinCollection.filter(coin => coin.id !== action.id))
      return state.coinCollection.filter(coin => coin.id !== action.id);
    default:
      return state;
  }
}
