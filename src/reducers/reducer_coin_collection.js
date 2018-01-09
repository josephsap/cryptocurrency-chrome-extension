import { ADD_COIN, RECEIVE_COINS } from '../constants';


export default function coinCollectionReducer(
  state = {
    coinCollection: [],
    coins: []
  },
  action
) {
  switch(action.type) {
    case RECEIVE_COINS:
      return { ...state, coins: action.coins };
    case ADD_COIN:
      console.log(state.coins, '---000---')
      return state.coins.forEach((item) => {
        if(action.selectedCoin === item.name) {
          return state.coinCollection.push(item);
        } else {
          return item;
        }
      });
      return [ ...state, { selectedCoin: action.selectedCoin } ];
    default:
      return state;
  }
}
