import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState(0);
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (!isInCart(item.book.id)) {
      setItems((prev) => [...prev, { ...item }]);
      setTotalItems(totalItems + item.quantity);
    } else {
      console.log("El libro ya fué agregado");
    }
  };

  const isInCart = (itemId) => {
    return items.some((item) => item.book.id === itemId);
  };

  const removeItem = (itemId, quantity) => {
    setTotalItems(totalItems - quantity);

    const newArray = items.filter((item) => item.book.id !== itemId);
    setItems(newArray);
  };
  const clearCart = () => {
    setItems([]);
    setTotalItems(0);
  };
  return (
    <CartContext.Provider
      value={{
        totalItems,
        items,
        addItem,
        clearCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
