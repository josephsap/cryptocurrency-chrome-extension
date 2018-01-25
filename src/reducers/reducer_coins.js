import { REQUEST_COINS, RECEIVE_COINS, ADD_COIN, DELETE_COIN, DISABLE_COIN } from '../constants';

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

    case DISABLE_COIN:
      let cns = [...state.coins];
      let match = cns.find(item => item.id === action.id);
      match.disabled ? match.disabled = false : match.disabled = true;
      let newCoinState = Object.assign(cns, match);
      return { ...state, coins: newCoinState};
      
    case ADD_COIN:
      return { ...state, coinCollection: [...state.coinCollection,  action.selectedCoin] };

    case DELETE_COIN:
      return { ...state, coinCollection: [...state.coinCollection.filter(coin => coin.id !== action.id)] };

    default:
      return state;
  }
}
