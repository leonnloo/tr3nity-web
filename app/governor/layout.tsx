import { GovernorProvider } from "@/context/governor-proposal-context";
import React from "react";

const OrderAdminLayout = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <GovernorProvider>
      <main>{children}</main>
    </GovernorProvider>
  );
};

export default OrderAdminLayout;
