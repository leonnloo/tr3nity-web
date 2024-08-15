import { SampleDataProvider } from "@/context/researcher-proposal-context";
import React from "react";

const OrderAdminLayout = ({ children }: React.PropsWithChildren<object>) => {
  return (
    <SampleDataProvider>
      <main>{children}</main>
    </SampleDataProvider>
  );
};

export default OrderAdminLayout;
