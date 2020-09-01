import {
  ADD_TO_CART,
  REMOVE_ITEM_FROM_CART,
  DELETE_CART,
  OPEN_MODAL_ITEM,
} from '../../../constant/types';
export const addToCart = (item) => {
  // const itemArray = [];
  // const arryKeys = Object.keys(item);
  // const arryValues = Object.values(item);
  // for (let i = 0; i < arryKeys.length; i++) {
  //   return (itemArray[arryKeys[i]] = arryValues[i]);
  // }
  // console.log(itemArray.length);
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

export const openModalItem = (item) => {
  return {
    type: OPEN_MODAL_ITEM,
    payload: item,
  };
};
