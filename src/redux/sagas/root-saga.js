import {all, call} from 'redux-saga/effects';
import fetchCollectionStart from './fetchCollections/collections-reducer';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart)]);
}
