const {
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_CART,
} = require('../../../constant/types');

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: item,
  };
};

export const deleteCart = (item) => {
  return {
    type: DELETE_CART,
    payload: item,
  };
};
