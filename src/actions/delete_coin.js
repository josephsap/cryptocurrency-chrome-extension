import { DELETE_COIN } from '../constants';

export function deleteCoin(id) {
  return {
    type: DELETE_COIN,
    id: id
  };
}