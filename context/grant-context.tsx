"use client";
import { Grant } from "@/utils/mockData";
import React, { createContext, useContext, useState } from "react";

interface GrantContextType {
  grant: Grant | null;
  setGrant: (grant: Grant | null) => void;
}

const GrantContext = createContext<GrantContextType | undefined>(
  undefined
);

export const GrantProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [grant, setGrant] = useState<Grant | null>(null);

  return (
    <GrantContext.Provider value={{ grant, setGrant }}>
      {children}
    </GrantContext.Provider>
  );
};

export const useGrant = () => {
  const context = useContext(GrantContext);
  if (!context) {
    throw new Error("useGrant must be used within a GrantProvider");
  }
  return context;
};
