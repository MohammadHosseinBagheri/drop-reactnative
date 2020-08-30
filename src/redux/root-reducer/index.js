import {combineReducers} from 'redux';
import collectionReducer from '../collections/reducer/collection';
const reducer = combineReducers({
  collections: collectionReducer,
});
export default reducer;
