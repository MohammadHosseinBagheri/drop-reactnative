import {
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_CART,
} from '../../../constant/types';
import {addToCart, removeFromCart, deleteCartItem} from '../cart-utils';

const INITIAL_STATE = {
  addedToCart: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        addedToCart: addToCart(state.addedToCart, action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        addedToCart: removeFromCart(state.addedToCart, action.payload),
      };
    case DELETE_CART:
      return {
        ...state,
        addedToCart: deleteCartItem(state.addedToCart, action.payload),
      };

    default:
      return state;
  }
};
export default cartReducer;
