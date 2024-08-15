import ResearcherProposalCard from "@/components/researcher/researcher-proposal-card";
import { Button } from "@/components/ui/button";
import React from "react";
import sampleImage1 from "@/public/sample-1.png";
import sampleImage2 from "@/public/sample-2.png";
import sampleImage3 from "@/public/sample-3.png";

const ResearcherMainPage = () => {
  return (
    <div className="pm flex flex-col">
      <div className="flex justify-between items-center mt-20">
        <h1 className="font-extrabold text-5xl ">All Proposals</h1>
        <Button className="rounded-full w-44 h-14 bg-[#84D0FF] text-lg text-black hover:bg-[#91d5ff]">
          New Proposals
        </Button>
      </div>
      <div className="flex flex-col justify-start items-start mb-10">
        <ResearcherProposalCard status="active" imageUrl={sampleImage1} title={'Early Detection of Gestational Diabetes'}/>
        <ResearcherProposalCard status="rejected" imageUrl={sampleImage3} title={'Early Detection of Gestational Diabetes'}/>
        <ResearcherProposalCard status="executed" imageUrl={sampleImage2} title={'Early Detection of Gestational Diabetes'}/>
      </div>
    </div>
  );
};

export default ResearcherMainPage;
