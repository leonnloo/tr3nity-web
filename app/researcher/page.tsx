import ResearcherProposalCard from "@/components/researcher/researcher-proposal-card";
import { Button } from "@/components/ui/button";
import React from "react";
import { sampleData } from "@/lib/example";

const ResearcherMainPage = () => {
  return (
    <div className="pm flex flex-col">
      <div className="flex justify-between items-center mt-20">
        <h1 className="font-extrabold text-5xl ">All Proposals</h1>
        <Button className="rounded-full px-6 py-6 bg-mainBlue text-lg text-black hover:bg-[#91d5ff]">
          New Proposals
        </Button>
      </div>
      <div className="flex flex-col justify-start items-start mb-10">
        {sampleData.slice(0, 5).map((proposal, index) => (
          <ResearcherProposalCard key={index} data={proposal} />
        ))}
      </div>
    </div>
  );
};

export default ResearcherMainPage;
