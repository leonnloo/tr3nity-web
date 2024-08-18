import { CartItem } from "@/context/cart-context";
import { Grant } from "@/utils/mockData";
import React from "react";

interface CartSummaryProps {
  cartItems: CartItem[];
  amounts: { [key: string]: number };
  grants: Grant[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, amounts, grants }) => {


  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>

                <div key={1} className="flex justify-between mb-2">
                  <span>Nanoparticle Drug Delivery Systems</span>
                  <span>5 TR3</span>
                </div>

                <div key={2} className="flex justify-between mb-2">
                  <span>CRISPR Gene Therapy for Rare Diseases</span>
                  <span>5 TR3</span>
                </div>

            <div className="flex justify-between font-semibold mt-2">
              <span>Total:</span>
              <span>10 TR3</span>
            </div>
      <div className="border-t pt-2 mt-2">
        <div className="flex justify-between font-semibold text-2xl">
          <span>Total contribution:</span>
          <span>10 TR3</span>
        </div>
      </div>
      </div>
    // </div>
      
  );
};

export default CartSummary;
