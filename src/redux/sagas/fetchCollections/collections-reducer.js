import {takeLatest, put, call} from 'redux-saga/effects';
import {FETCH_COLLECTIONS_START} from '../../../constant/types';
import {
  fetchCollectionsStart,
  fetchCollectionsFailure,
} from '../../collections/action/collection';


const apiFetcher = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const responseJson = await response.json();
  return responseJson;
};

export function* fetchCollectionStartAsync() {
  yield console.log('fired');
  try {
    const response = yield call(apiFetcher);
    yield put(fetchCollectionsStart(response));
  } catch (error) {
    yield put(fetchCollectionsFailure(error));
  }
}

export default function* fetchCollectionStart() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionStartAsync);
}
