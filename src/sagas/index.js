import {all, fork} from 'redux-saga/effects';
import userSaga from './userSaga';
import albumSaga from './albumSaga';
import photoSaga from './photoSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(albumSaga), fork(photoSaga)]);
}
