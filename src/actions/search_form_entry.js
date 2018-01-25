import { SEARCH_FORM_ENTRY, ADD_COIN, DISABLE_COIN } from '../constants';

export function searchFormEntry(searchFormText) {
  return {
    type: SEARCH_FORM_ENTRY,
    searchFormText: searchFormText
  };
}

export function addCoin(selectedCoin) {
  return {
    type: ADD_COIN,
    selectedCoin: selectedCoin
  };
}

export function disableCoin(id) {
  return {
    type: DISABLE_COIN,
    id
  };
}
