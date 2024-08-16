import { CartItem, Fund } from '@/types/interfaces';
import React from 'react';


interface CartSummaryProps {
  cartItems: CartItem[];
  funds: Fund[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, funds }) => {
  const getTotalContribution = () => 
    cartItems.reduce((sum, item) => sum + item.amount, 0);

  const getProjectTitle = (fundId: string, projectId: string) => {
    const fund = funds.find(f => f.id === fundId);
    return fund?.projects.find(p => p.id === projectId)?.title || 'Unknown Project';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex justify-between mb-2">
          <span>{getProjectTitle(item.fundId, item.projectId)}</span>
          <span>{item.amount} TR3</span>
        </div>
      ))}
      <div className="border-t pt-2 mt-2">
        <div className="flex justify-between font-semibold">
          <span>Total contribution:</span>
          <span>{getTotalContribution()} TR3</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;