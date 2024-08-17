"use client";
import React, { useState } from "react";
import { Project } from "@/utils/mockData";
import sampleImage from "@/public/sample-1.png";
import Image from "next/image";

interface FundItemProps {
  project: Project;
  onUpdateCart: (projectId: number, grantID: number) => void;
  onAmountChange: (grantID: number, projectId: number, amount: number) => void;
}

const FundItem: React.FC<FundItemProps> = ({
  project,
  onUpdateCart,
  onAmountChange,
}) => {
  const [amount, setAmount] = useState(0);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = Number(e.target.value);
    setAmount(newAmount);
    onAmountChange(project.grant, project.id, newAmount);
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="flex">
        <Image
          src={sampleImage} // Ensure this path is correct for your image
          width={300}
          height={200}
          alt="Research"
          className="h-48 object-cover rounded-xl"
        />
        <div className="flex flex-col ml-5 justify-between">
          <div>
            <h3 className="text-lg font-semibold">{project.project_name}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="flex flex-col space-y-5">
              <div className="mt-4">
                <input
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  className="border rounded px-2 py-1"
                  placeholder="TR3 Coin"
                />
              </div>
              <button
                onClick={() => onUpdateCart(project.id, project.grant)}
                className="bg-mainBlue text-white px-4 py-2 rounded-md"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundItem;
