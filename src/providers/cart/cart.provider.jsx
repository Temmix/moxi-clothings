import React, { createContext, useState, useEffect } from "react";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  getTotal,
  getTotalCount
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItem: () => {},
  resetCart: () => {},
  cartItemsCount: 0,
  total: 0
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);
  const addItem = item => setCartItems(addItemToCart(cartItems, item));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItem = item => setCartItems(clearItemFromCart(cartItems, item));
  const resetCart = () => setCartItems([]);
  const toggleHidden = () => setHidden(!hidden);

  useEffect(() => {
    setTotal(getTotal(cartItems));
    setCartItemsCount(getTotalCount(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        total,
        removeItem,
        clearItem,
        resetCart,
        cartItemsCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
