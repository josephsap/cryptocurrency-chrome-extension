import { SEARCH_FORM_ENTRY, CURRENT_DISPLAYED_COIN } from '../constants';

export default function(
  state = {
    searchFormText: '',
    coinName: 'ethereum'
  }, 
  action
) {
  switch (action.type) {
    case SEARCH_FORM_ENTRY:
      return { ...state, searchFormText: action.searchFormText };

    case CURRENT_DISPLAYED_COIN:
      return { ...state, coinName: action.coinName };
      
    default:
      return state;
  }
}
