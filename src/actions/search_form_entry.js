import { SEARCH_FORM_ENTRY, CURRENT_DISPLAYED_COIN, ADD_COIN } from '../constants';

export function searchFormEntry(searchFormText) {
  return {
    type: SEARCH_FORM_ENTRY,
    searchFormText: searchFormText
  };
}


export function currentlyDisplayedCoin(coinItem) {
  return {
    type: CURRENT_DISPLAYED_COIN,
    coinItem: coinItem
  };
}

export function addCoin(selectedCoin) {
  return {
    type: ADD_COIN,
    selectedCoin: selectedCoin
  };
}