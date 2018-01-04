import axios from 'axios';
import { API_BASE_URL, REQUEST_COINS, RECEIVE_COINS } from '../constants';


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
  }
}


// Thunk action creators: make network requests.
export function fetchCoins() {

  // if(searchTerm === undefined) {
  //   searchTerm = 'ethereum';
  // }

  return function(dispatch) {
    dispatch(requestCoins());
    return axios.get(`${API_BASE_URL}?limit=10`)
      .then(response => {
        dispatch(receiveCoins(response.data));
      })
      .catch(error => {
        throw(error);
      });
  }
}