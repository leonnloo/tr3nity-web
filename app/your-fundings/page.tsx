"use client"

import React, { useState, useEffect } from 'react';
import CartGrantContainer from '@/components/cart/CartGrantsContainer';
import CartSummary from '@/components/cart/CartSummary';
import { CartItem, Fund } from '@/types/interfaces';
import { mockFunds, mockCartItems } from '@/utils/mockData';


const YourFundingsPage: React.FC = () => {
  const [funds, setFunds] = useState<Fund[]>(mockFunds);
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  useEffect(() => {
    // Fetch funds data from your API or load from a static source
    const fetchFunds = async () => {
      // Replace this with your actual data fetching logic
      const response = await fetch('/api/funds');
      const data = await response.json();
      setFunds(data);
    };

    fetchFunds();
  }, []);

  const handleUpdateCart = (fundId: string, projectId: string, amount: number) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        item => item.fundId === fundId && item.projectId === projectId
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex] = { ...newItems[existingItemIndex], amount };
        return newItems;
      } else {
        return [...prevItems, { fundId, projectId, amount }];
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Fundings</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 pr-4">
          {funds.map(fund => (
            <CartGrantContainer
              key={fund.id}
              fund={fund}
              cartItems={cartItems.filter(item => item.fundId === fund.id)}
              onUpdateCart={handleUpdateCart}
            />
          ))}
        </div>
        <div className="w-full lg:w-1/3">
          <CartSummary cartItems={cartItems} funds={funds} />
        </div>
      </div>
    </div>
  );
};

export default YourFundingsPage;