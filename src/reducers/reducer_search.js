import { SEARCH_FORM_ENTRY } from '../constants';

export default function(
  state = {
    searchFormText: ''
  }, 
  action
) {
  switch (action.type) {
    case SEARCH_FORM_ENTRY:
      return { ...state, searchFormText: action.searchFormText };
      
    default:
      return state;
  }
}
