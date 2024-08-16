"use client";
import { sampleDataType } from "@/lib/example";
import React, { createContext, useContext, useState } from "react";

interface SampleDataContextType {
  governnorSampleData: sampleDataType | null;
  setGovernorSampleData: (governnorSampleData: sampleDataType | null) => void;
}

const GovernorContext = createContext<SampleDataContextType | undefined>(
  undefined
);

export const GovernorProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [governnorSampleData, setGovernorSampleData] = useState<sampleDataType | null>(null);

  return (
    <GovernorContext.Provider value={{ governnorSampleData, setGovernorSampleData }}>
      {children}
    </GovernorContext.Provider>
  );
};

export const useGovernorSampleData = () => {
  const context = useContext(GovernorContext);
  if (!context) {
    throw new Error("useSampleData must be used within a SampleDataProvider");
  }
  return context;
};
