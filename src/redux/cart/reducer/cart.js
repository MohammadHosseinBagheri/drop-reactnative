import {
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_CART,
  OPEN_MODAL_ITEM,
  SHOW_CART,
} from '../../../constant/types';
import {addToCart, removeFromCart, deleteCartItem} from '../cart-utils';

const INITIAL_STATE = {
  addedToCart: [],
  openModalItem: '',
  show: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL_ITEM:
      return {
        ...state,
        openModalItem: action.payload,
      };
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
    case SHOW_CART:
      return {
        ...state,
        show: !state.show,
      };

    default:
      return state;
  }
};
export default cartReducer;
