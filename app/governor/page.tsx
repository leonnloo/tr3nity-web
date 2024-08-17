import ReputationScore from "@/components/governor/reputation-card";
import Rewards from "@/components/governor/rewards-card";
import VotedProposals from "@/components/governor/voted-proposal-card";
import GovernorPageSlider from "@/components/slider/governor-page-slider";
import React from "react";

const GovernorsMainPage = () => {
  return (
    <div className="pm flex flex-col mt-10">
      <div className="grid grid-cols-3 gap-6 space-x-10 h-full">
        <div className="col-span-2 row-span-2">
          <Rewards />
        </div>
        <div className="col-span-1 row-span-2 flex flex-col space-y-5 h-full">
          <div className="flex-grow">
            <ReputationScore />
          </div>
          <div className="flex-grow">
            <VotedProposals />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20">
        <h1 className="font-extrabold text-4xl ">Recent Proposals</h1>
      </div>
      <div className="mt-5">
        <GovernorPageSlider showDetails={false} />
        <GovernorPageSlider showDetails={false} />
      </div>
      {/* <div className="flex flex-col justify-start items-start mb-10"> */}
      {/* {sampleData.slice(0, 5).map((proposal, index) => (
          <ResearcherProposalCard key={index} data={proposal} />
        ))} */}
      {/* </div> */}
    </div>
  );
};

export default GovernorsMainPage;
