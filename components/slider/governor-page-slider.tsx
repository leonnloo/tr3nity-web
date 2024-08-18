"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProposalCard from "@/components/proposal-card";
import { useRouter } from "next/navigation";
import { useGovernorProposal } from "@/context/governor-proposal-context";
import { fetchProjects, Project } from "@/lib/example";
import { useResearcherSampleData } from "@/context/researcher-proposal-context";

const GovernorPageSlider = ({ showDetails }: { showDetails: boolean }) => {
  const router = useRouter();
  const { setGovernorProposal } = useGovernorProposal();
  const { setResearcherSampleData } = useResearcherSampleData();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await fetchProjects();
        setProjects(fetchedProjects);
      } catch (err) {
        setError("Failed to fetch projects: " + (err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.length > 0 ? (
            projects.map((data, index) => (
              <CarouselItem
                key={index} // Ensure each item has a unique key
                className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
                onClick={ async () => {
                  setGovernorProposal(data);
                  setResearcherSampleData(data)
                  router.push("/governor/proposal");
                }}
              >
                <ProposalCard
                  showDetails={showDetails}
                  showProgress={true}
                  tokensRaised={data.donations} // Adjust according to your data structure
                  totalTokens={data.funds} // Adjust according to your data structure
                  endDate={data.endDate} // Handle optional endDate
                  title={data.title}
                  description={data.background}
                />
              </CarouselItem>
            ))
          ) : (
            <p>No projects available</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GovernorPageSlider;
