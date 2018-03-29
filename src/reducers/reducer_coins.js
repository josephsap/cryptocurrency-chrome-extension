import { REQUEST_COINS, RECEIVE_COINS, ADD_COIN, DELETE_COIN, DISABLE_COIN, SORT_GAINERS, UPDATE_COINCOLLECTION } from '../constants';

export default function coinsReducer(
  state = {
    isFetching: false,
    coins: [],
    coinCollection: [],
    gainers: []
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

    case UPDATE_COINCOLLECTION:
      let currentCoinState = [...state.coins];
      let currentCoinCollection = [...state.coinCollection];

      // array.find will return the element if
      // the id is found in the currentCoinState array.
      // if not, it will return the element in currentCoinCollection.
      // map is making a new array. there is no replacing
      // of elements going on. the new array, updatedCoinCollection,
      // becomes out current coin collection state.
      let updatedCoinCollection = currentCoinCollection.map(obj => currentCoinState.find(item => item.id === obj.id) || obj);

      return { ...state, coinCollection: updatedCoinCollection };

    case SORT_GAINERS:
      let allCoins = [...state.coins];

      // filter out coins with negative percent change.
      // this leaves us with coins that have gained in value
      let positiveGainCoins = allCoins.filter(coin => coin.percent_change_24h > 0);

      // sort those positive change coins
      // in descending order (largest percent change to smallest)
      let gainCoinsSorted = positiveGainCoins.sort((a, b) => {
        return a.percent_change_24h - b.percent_change_24h;
      }).reverse();
      
      return { ...state, gainers: gainCoinsSorted };

    default:
      return state;
  }
}
