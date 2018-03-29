import axios from 'axios';
import { API_BASE_URL, REQUEST_COINS, RECEIVE_COINS, SORT_GAINERS, UPDATE_COINCOLLECTION } from '../constants';


// time to get coins
export function requestCoins(coins) {
  return {
    type: REQUEST_COINS,
    coins
  };

}

// when we receive the coins (network req comes through)
export function receiveCoins(coins) {
  return {
    type: RECEIVE_COINS,
    coins
  };
}


// Thunk action creators: make network requests.
export function fetchCoins() {
  return function(dispatch) {
    dispatch(requestCoins());
    return axios.get(`${API_BASE_URL}`)
      .then(response => {
        dispatch(receiveCoins(response.data));
        dispatch(updateCoinCollection(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
}

// sort through and find the gainers
export function sortGainers(gainers) {
  return {
    type: SORT_GAINERS,
    gainers
  };
}

// update state of coin collection on
// subsequent fetches from API
export function updateCoinCollection(coins) {
  return {
    type: UPDATE_COINCOLLECTION,
    coins
  }
}