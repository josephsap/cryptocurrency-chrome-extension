import { SEARCH_FORM_ENTRY } from '../constants';

export function searchFormEntry(searchFormText) {
  return {
    type: SEARCH_FORM_ENTRY,
    searchFormText: searchFormText
  };
}