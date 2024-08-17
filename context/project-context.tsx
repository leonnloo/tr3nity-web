"use client";
import { Project } from "@/utils/mockData";
import React, { createContext, useContext, useState } from "react";

interface ProjectContextType {
  project: Project | null;
  setProject: (Project: Project | null) => void;
}

const ProjectContext = createContext<ProjectContextType | undefined>(
  undefined
);

export const ProjectProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [project, setProject] = useState<Project | null>(null);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error("useProject must be used within a ProjectProvider");
  }
  return context;
};
