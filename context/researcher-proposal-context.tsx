"use client";
import { sampleDataType } from "@/lib/example";
import React, { createContext, useContext, useState } from "react";

interface SampleDataContextType {
  sampleData: sampleDataType | null;
  setSampleData: (sampleData: sampleDataType | null) => void;
}

const SampleDataContext = createContext<SampleDataContextType | undefined>(
  undefined
);

export const SampleDataProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [sampleData, setSampleData] = useState<sampleDataType | null>(null);

  return (
    <SampleDataContext.Provider value={{ sampleData, setSampleData }}>
      {children}
    </SampleDataContext.Provider>
  );
};

export const useSampleData = () => {
  const context = useContext(SampleDataContext);
  if (!context) {
    throw new Error("useSampleData must be used within a SampleDataProvider");
  }
  return context;
};
