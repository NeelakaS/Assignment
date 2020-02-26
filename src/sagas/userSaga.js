import {
  FETCHING_USER_DATA,
  FETCHING_USER_DATA_SUCCESS,
  FETCHING_USER_ERROR,
} from '../action/actionCreators';

import {put, takeLatest} from 'redux-saga/effects';
import getUserInfo from '../services/userService';

function* fetchUserData(action) {
  try {
    const userData = yield getUserInfo();
    yield put({type: FETCHING_USER_DATA_SUCCESS, userData});
  } catch (error) {
    yield put({type: FETCHING_USER_ERROR});
  }
}

function* userSaga() {
  yield takeLatest(FETCHING_USER_DATA, fetchUserData);
}

export default userSaga;
