import {combineReducers} from 'redux';
import collectionReducer from '../collections/reducer/collection';
import cartReducer from '../cart/reducer/cart';
const reducer = combineReducers({
  collections: collectionReducer,
  cart: cartReducer,
});
export default reducer;
