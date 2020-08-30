import {all, call} from 'redux-saga/effects';
import fetchCollectionStart from '../collections-reducer';
export default function* collectionRootSaga() {
  yield all([call(fetchCollectionStart)]);
}
