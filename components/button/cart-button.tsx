"use client";
import { useCart } from "@/context/cart-context";
import Link from "next/link";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
const CartButton = () => {
  const { cart } = useCart();
  const cartItems = cart?.cartItems;
  return (
    <Link
      href="/cart"
      className="px-3 py-2 inline-block text-center text-gray-700 bg-white shadow-sm border border-gray-200 rounded-md hover:bg-gray-100 hover:border-gray-300"
    >
      <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
      <div className=" flex items-center">
        <FaShoppingCart className="mr-1" />
        <span className="hidden lg:inline ml-1">
          (<b>{cartItems?.length || 0}</b>)
        </span>
      </div>
    </Link>
  );
};

export default CartButton;
