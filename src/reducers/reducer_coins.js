import { REQUEST_COINS, RECEIVE_COINS, ADD_COIN, DELETE_COIN, DISABLE_COIN } from '../constants';
import _ from 'lodash';

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
      // console.log(state.coinCollection.length, 'coin collection', state.coinCollection);
      let coinCollectionState = [...state.coinCollection];
      let currState = [action.coins];
      let newCoins = _.merge(coinCollectionState, currState);
      console.log(currState, 'hi-----------', coinCollectionState)
      return { ...state, isFetching: false, coins: newCoins };

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
