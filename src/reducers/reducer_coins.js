import { REQUEST_COINS, RECEIVE_COINS } from '../constants';

export default function coinsReducer(
  state = {
    isFetching: false,
    coins: []
  }, 
  action
) {
  switch (action.type) {
    case REQUEST_COINS:
      return { ...state, isFetching: true };

    case RECEIVE_COINS:
      return { ...state, isFetching: false, coins: action.coins };
      
    default:
      return state;
  }
}
