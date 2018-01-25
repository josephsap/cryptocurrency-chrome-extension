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
      let cns = [...state.coins];
      console.log(cns)
      let coinAlreadyInCollection = cns.filter(coin => coin.id == action.selectedCoin.id);
      console.log(action.selectedCoin.id, '0000', coinAlreadyInCollection);
      return { ...state, coinCollection: [...state.coinCollection,  action.selectedCoin] };

    case DELETE_COIN:
      return { ...state, coinCollection: [...state.coinCollection.filter(coin => coin.id !== action.id)] };

    default:
      return state;
  }
}
