"use client";
import { Project } from "@/lib/example";
import React, { createContext, useContext, useState } from "react";

interface SampleDataContextType {
  researcherSampleData: Project | null;
  setResearcherSampleData: (researcherSampleData: Project | null) => void;
}

const ResearcherContext = createContext<SampleDataContextType | undefined>(
  undefined
);

export const ResearcherProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [researcherSampleData, setResearcherSampleData] = useState<Project | null>(null);

  return (
    <ResearcherContext.Provider value={{ researcherSampleData, setResearcherSampleData }}>
      {children}
    </ResearcherContext.Provider>
  );
};

export const useResearcherSampleData = () => {
  const context = useContext(ResearcherContext);
  if (!context) {
    throw new Error("useSampleData must be used within a SampleDataProvider");
  }
  return context;
};
