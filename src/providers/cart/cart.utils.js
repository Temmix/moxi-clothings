export const addItemToCart = (cartItems, item) => {
  const itemExists = cartItems.find(cartItem => cartItem.id === item.id);

  if (itemExists) {
    return cartItems.map(cartItem =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, item) => {
  const itemExists = cartItems.find(cartItem => cartItem.id === item.id);

  if (itemExists.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== item.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, item) => {
  return cartItems.filter(cartItem => cartItem.id !== item.id);
};

export const getTotal = cartItems => {
  return cartItems.reduce((accu, item) => accu + item.quantity * item.price, 0);
};

export const getTotalCount = cartItems => {
  return cartItems.reduce((accu, item) => accu + item.quantity, 0);
};
