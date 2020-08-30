import {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  COLLECTIONS_ITEM,
} from '../../../constant/types';

export const fetchCollections = (item) => {
  return {
    type: COLLECTIONS_ITEM,
    payload: item,
  };
};

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START,
  };
};
export const fetchCollectionsSuccess = (item) => {
  return {
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: item,
  };
};
export const fetchCollectionsFailure = (error) => {
  return {
    type: FETCH_COLLECTIONS_FAILURE,
    payload: error,
  };
};
