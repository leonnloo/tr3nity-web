import { CartItem } from "@/context/cart-context";
import { Grant } from "@/utils/mockData";
import React from "react";

interface CartSummaryProps {
  cartItems: CartItem[];
  amounts: { [key: string]: number };
  grants: Grant[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, amounts, grants }) => {
  const getTotalContribution = () =>
    Object.values(amounts).reduce((sum, amount) => sum + amount, 0);

  const groupProjectsByGrant = () => {
    const grouped: { [grantID: number]: CartItem[] } = {};

    cartItems.forEach((item) => {
      const grantID = item.project.grant;
      if (!grouped[grantID]) {
        grouped[grantID] = [];
      }
      grouped[grantID].push(item);
    });

    return grouped;
  };

  const groupedProjects = groupProjectsByGrant();

  const getGrantTotal = (grantID: number) => {
    return groupedProjects[grantID].reduce((total, item) => {
      const key = `${item.project.grant}-${item.project.id}`;
      return total + (amounts[key] || 0);
    }, 0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      {Object.entries(groupedProjects).map(([grantID, items]) => {
        const grant = grants.find((g) => g.id === parseInt(grantID));
        const grantTotal = getGrantTotal(parseInt(grantID));

        return (
          <div key={grantID} className="mb-4">
            <h3 className="text-lg font-semibold">{grant?.program_name || "Unknown Grant"}</h3>
            {items.map((item) => {
              const key = `${item.project.grant}-${item.project.id}`;
              const amount = amounts[key] || 0;
              return (
                <div key={item.project.id} className="flex justify-between mb-2">
                  <span>{item.project.project_name}</span>
                  <span>{amount} TR3</span>
                </div>
              );
            })}
            <div className="flex justify-between font-semibold mt-2">
              <span>Total:</span>
              <span>{grantTotal} TR3</span>
            </div>
          </div>
        );
      })}
      <div className="border-t pt-2 mt-2">
        <div className="flex justify-between font-semibold text-2xl">
          <span>Total contribution:</span>
          <span>{getTotalContribution()} TR3</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
