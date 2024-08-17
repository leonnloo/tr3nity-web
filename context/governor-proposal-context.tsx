"use client";
import { sampleDataType } from "@/lib/example";
import React, { createContext, useContext, useState } from "react";

interface GProposalContextType {
  governorProposal: sampleDataType | null;
  setGovernorProposal: (governorProposal: sampleDataType | null) => void;
}

const GovernorContext = createContext<GProposalContextType | undefined>(
  undefined
);

export const GovernorProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [governorProposal, setGovernorProposal] =
    useState<sampleDataType | null>(null);

  return (
    <GovernorContext.Provider value={{ governorProposal, setGovernorProposal }}>
      {children}
    </GovernorContext.Provider>
  );
};

export const useGovernorProposal = () => {
  const context = useContext(GovernorContext);
  if (!context) {
    throw new Error("GuseProposal must be used within a GProposalProvider");
  }
  return context;
};
