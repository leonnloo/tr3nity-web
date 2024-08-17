"use client";

import React from "react";
import Image from "next/image";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CartPage: React.FC = () => {
  const { cart, deleteItemFromCart } = useCart();

  if (!cart || cart.cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center mt-10">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <Link href="/" className="text-blue-500 underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.cartItems.map((item, index) => (
        <div
          key={item.project.id}
          className="flex items-center justify-between border-b border-gray-300 py-4"
        >
          <div className="flex items-center">
            <div className="w-24 h-24 relative">
              <Image
                src="/sample-1.png" // Placeholder image, replace with actual project image if available
                alt={item.project.project_name}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">{item.project.project_name}</h2>
              <p className="text-gray-500">{item.project.description}</p>
            </div>
          </div>
          <Button
            variant="destructive"
            onClick={() => deleteItemFromCart(item.project.id)}
          >
            Remove
          </Button>
        </div>
      ))}
      <div className="mt-10 text-right">
        <Link
          href="/checkout"
          className="bg-mainBlue text-white py-2 px-4 rounded-md"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
