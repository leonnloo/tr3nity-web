"use client";

import { Project } from "@/utils/mockData";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

export interface CartItem {
  project: Project;
}

interface CartContextType {
  cart: CartState;
  addItemToCart: (item: CartItem) => void;
  deleteItemFromCart: (id: number) => void;
}

interface CartState {
  cartItems: CartItem[];
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartState>({ cartItems: [] });

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    // localStorage.clear();
    const cartFromStorage = localStorage.getItem("cart");
    setCart(cartFromStorage ? JSON.parse(cartFromStorage) : { cartItems: [] });
  };

  const addItemToCart = (item: CartItem) => {
    const isItemExist = cart?.cartItems?.find(
      (i) => i.project.id === item.project.id
    );

    let newCartItems;

    if (isItemExist) {
      // If item exists, we don't add it again (assuming you don't want duplicates)
      newCartItems = cart.cartItems;
    } else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const deleteItemFromCart = (id: number) => {
    const newCartItems = cart?.cartItems?.filter((i) => i.project.id !== id);

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItemToCart,
        deleteItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a GrantProvider");
  }
  return context;
};

export default CartContext;
