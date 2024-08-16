import { Project } from '@/types/interfaces';
import React, { useState, useEffect } from 'react';
import Image from "next/image";

interface FundItemProps {
  project: Project;
  fundId: string;
  cartAmount: number;
  onUpdateCart: (fundId: string, projectId: string, amount: number) => void;
}


const FundItem: React.FC<FundItemProps> = ({ project, fundId, cartAmount, onUpdateCart }) => {
  const [amount, setAmount] = useState(cartAmount);

  useEffect(() => {
    setAmount(cartAmount);
  }, [cartAmount]);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    setAmount(newAmount);
    onUpdateCart(fundId, project.id, newAmount);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex space-x-5">
        <Image
          src="/sample-1.png" // Ensure this path is correct for your image
          width={200}
          height={200}
          alt="Research"
          className="w-48 h-48 object-cover rounded-md"
        />

        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-gray-600">{project.description}</p>
        </div>
      </div>
      <div className="mt-4">
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
          className="border rounded px-2 py-1"
          placeholder="TR3 Coin"
        />
      </div>
    </div>
  );
};

export default FundItem;