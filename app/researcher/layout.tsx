import { ResearcherProvider } from "@/context/researcher-proposal-context";
import React from "react";

const OrderAdminLayout = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <ResearcherProvider>
      <main>{children}</main>
    </ResearcherProvider>
  );
};

export default OrderAdminLayout;
