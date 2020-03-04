import {
  FETCHING_ALBUM_DATA,
  FETCHING_ALBUM_DATA_SUCCESS,
  FETCHING_ALBUM_ERROR,
} from '../action/actionCreators';

import {put, takeLatest} from 'redux-saga/effects';
import getAlbumInfo from '../services/albumsService';

function* fetchAlbumData(action) {
  try {
    const albumData = yield getAlbumInfo(action.payload);
    yield put({type: FETCHING_ALBUM_DATA_SUCCESS, albumData});
  } catch (error) {
    yield put({type: FETCHING_ALBUM_ERROR});
  }
}

function* albumSaga() {
  yield takeLatest(FETCHING_ALBUM_DATA, fetchAlbumData);
}

export default albumSaga;
