"use client";

import React, { useEffect, useState } from "react";
import CartGrantContainer from "@/components/cart/CartGrantsContainer";
import CartSummary from "@/components/cart/CartSummary";
import { useCart } from "@/context/cart-context";
import { fetchGrants, Grant, Project } from "@/utils/mockData";
import { toast } from "@/components/ui/use-toast";

const YourFundingsPage: React.FC = () => {
  const { cart, deleteItemFromCart } = useCart();
  const cartItems = cart.cartItems;
  const [grants, setGrants] = useState<Grant[]>([]);
  const [loading, setLoading] = useState(true);
  const [amounts, setAmounts] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Fetch grants data
    const getData = async () => {
      const fetchedGrants = await fetchGrants();
      setGrants(fetchedGrants);
      setLoading(false);
    };

    getData();
  }, []);

  // // Function to group projects by grantID
  // const groupProjectsByGrant = () => {
  //   const groupedProjects: { [grantID: string]: Project[] } = {};

  //   cartItems.forEach((item) => {
  //     console.log("Aim:" + item.project.grant);
  //     const grantID = item.project.grant.toString();
  //     if (!groupedProjects[grantID]) {
  //       groupedProjects[grantID] = [];
  //     }

  //     groupedProjects[grantID].push(item.project);
  //   });

  //   return groupedProjects;
  // };

  // const calculateGrantTotal = (grantID: string) => {
  //   return Object.entries(amounts)
  //     .filter(([key]) => key.startsWith(`${grantID}-`))
  //     .reduce((total, [, amount]) => total + amount, 0);
  // };

  // const onAmountChange = (
  //   grantID: number,
  //   projectId: number,
  //   amount: number
  // ) => {
  //   const key = `${grantID}-${projectId}`;
  //   setAmounts((prevAmounts) => ({
  //     ...prevAmounts,
  //     [key]: amount,
  //   }));
  // };

  // const handleUpdateCart = (projectId: number, grantID: number) => {
  //   const item = cartItems.find((item) => item.project.id === projectId);
  //   if (item) {
  //     deleteItemFromCart(projectId);
  //     const key = `${grantID}-${projectId}`;
  //     setAmounts((prevAmounts) => {
  //       const { [key]: _, ...rest } = prevAmounts; // Remove the specific project entry from amounts
  //       return rest;
  //     });
  //   }
  // };

  // const groupedProjects = groupProjectsByGrant();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-2/3 pr-4">
          {/* {Object.entries(groupedProjects).map(([grantID, projects]) => {
            const matchingGrant = grants.find(
              (grant) => grant.id.toString() === grantID
            );
            const grantTotal = calculateGrantTotal(grantID); */}
            {/* return (
              <CartGrantContainer/>
              );
              })} */}
              <CartGrantContainer/>
        </div>
        <div className="w-full lg:w-1/3">
          <CartSummary
            cartItems={cartItems}
            amounts={amounts}
            grants={grants}
          />
          <button className="bg-mainBlue text-white w-full py-2 rounded-xl mt-5" onClick={()=>{toast({
            title: "Checkout",
            description: "You have successfully checked out",
          })}}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default YourFundingsPage;