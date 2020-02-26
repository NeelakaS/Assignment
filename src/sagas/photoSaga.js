import {
  FETCHING_PHOTO_DATA,
  FETCHING_PHOTO_DATA_SUCCESS,
  FETCHING_PHOTO_ERROR,
} from '../action/actionCreators';

import {put, takeLatest} from 'redux-saga/effects';
import getPlaceInfo from '../services/photosService';

function* fetchPhotoData(action) {
  try {
    const photoData = yield getPlaceInfo(action.payload);
    console.log('photo_saga', photoData);
    yield put({type: FETCHING_PHOTO_DATA_SUCCESS, photoData});
  } catch (error) {
    yield put({type: FETCHING_PHOTO_ERROR});
  }
}

function* photoSaga() {
  yield takeLatest(FETCHING_PHOTO_DATA, fetchPhotoData);
}

export default photoSaga;
