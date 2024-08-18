import { ResearcherProvider } from "@/context/researcher-proposal-context";
import React from "react";

const OrderAdminLayout = ({ children }: React.PropsWithChildren<object>) => {
  return (
      <main>{children}</main>
  );
};

export default OrderAdminLayout;
