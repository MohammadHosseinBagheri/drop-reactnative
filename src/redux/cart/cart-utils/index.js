export const addToCart = (cartItems, itemForAdd) => {
  const isExist = cartItems.filter((item) => item.id == itemForAdd.id);
  if (isExist) {
    return cartItems.map((item) => {
      if (item.id == itemForAdd.id) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
  }
  return [...cartItems, {...itemForAdd, quantity: 1}];
};

export const removeFromCart = (cartItems, itemForRemove) => {
  const isExist = cartItems.find((item) => item.id == itemForRemove.id);
  if (isExist.quantity == 1) {
    return cartItems.filter((item) => item.id != itemForRemove.id);
  }
  return cartItems.map((item) => {
    if (item.id == itemForRemove.id) {
      return {...item, quantity: item.quantity - 1};
    }
    return item;
  });
};
export const deleteCartItem = (cartItems, itemForDelete) => {
  return cartItems.filter((item) => item.id != itemForDelete.id);
};
