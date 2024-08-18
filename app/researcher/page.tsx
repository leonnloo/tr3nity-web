"use client";
import React, { useState, useEffect } from "react";
import ResearcherProposalCard from "@/components/researcher/researcher-proposal-card";
import NewProposalButton from "@/components/researcher/new-proposal-button";
import { fetchProjects, Project } from "@/lib/example";

export const reseacher_wallet_address = '0x91A9fd571BE76C48Abfa189BC6b575054800ee0c';   

const ResearcherMainPage = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Function to fetch projects
    const getProjects = async () => {
      try {
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        setError("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="pm flex flex-col">
      <div className="flex justify-between items-center mt-20">
        <h1 className="font-extrabold text-5xl">All Proposals</h1>
        <NewProposalButton />
      </div>
      <div className="flex flex-col justify-start items-start mb-10">
        {projects.length > 0 ? (
          projects.slice(0, 5).map((proposal, index) => (
            <ResearcherProposalCard key={index} data={proposal} />
          ))
        ) : (
          <p>No projects available</p>
        )}
      </div>
    </div>
  );
};

export default ResearcherMainPage;
