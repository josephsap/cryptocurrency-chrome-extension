import { SEARCH_FORM_ENTRY, CURRENT_DISPLAYED_COIN } from '../constants';

export function searchFormEntry(searchFormText) {
  return {
    type: SEARCH_FORM_ENTRY,
    searchFormText: searchFormText
  };
}


export function currentlyDisplayedCoin(coinName) {
  return {
    type: CURRENT_DISPLAYED_COIN,
    coinName: coinName
  };
}