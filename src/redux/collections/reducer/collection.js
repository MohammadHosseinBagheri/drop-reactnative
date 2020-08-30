const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_SUCCESS,
  COLLECTIONS_ITEM,
} = require('../../../constant/types');

// const INITIAL_STATE = {
//   items:null,
//   error: undefined,
//   isFetching: false,
// };
const INITIAL_STATE = {
  items: null,
};

const collectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COLLECTIONS_ITEM:
      console.log(action.payload);
      return {
        ...state,
        items: action.payload,
      };
    // case FETCH_COLLECTIONS_START:
    //   // console.log(action.payload);
    //   return {...state, isFetching: true};
    // case FETCH_COLLECTIONS_SUCCESS:
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     items: action.payload,
    //     isFetching: false,
    //   };
    // case FETCH_COLLECTIONS_FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     isFetching: false,
    //   };
    default:
      return state;
  }
};
export default collectionReducer;
