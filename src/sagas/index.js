// import { delay } from 'redux-saga';
import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_API_DATA, RECEIVE_API_DATA, GET_DATA_ERROR, API_BASE_URL } from '../constants';
import axios from 'axios';


// saga actions
export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = (data) => ({ type: RECEIVE_API_DATA, data });


// api service
function getDataFromAPI(searchTerm) {
  if(!searchTerm || searchTerm === undefined) {
    searchTerm = 'ethereum';
  }
  return axios.get(`${API_BASE_URL}${searchTerm}/`);
}


export function* apiSideEffect(action) {
  try {
    // step 1
    const data = yield call(getDataFromAPI);
    // step 2
    yield put(receiveApiData(data));
  } catch(e) {
    console.log(e, 'error api call');
    yield put({ type: GET_DATA_ERROR, payload: e.message });
  }
}


export default function* apiSaga() {
  yield takeLatest(REQUEST_API_DATA, apiSideEffect);
}




