import ReputationScore from "@/components/governor/reputation-card";
import Rewards from "@/components/governor/rewards-card";
import VotedProposals from "@/components/governor/voted-proposal-card";
import GovernorPageSlider from "@/components/slider/governor-page-slider";
import React from "react";

const GovernorsMainPage = () => {
  return (
    <div className="pm flex flex-col mt-10">
      <div className="grid grid-cols-3 grid-row-2 gap-6 space-x-10">
        <div className="col-span-2 row-span-2">
          <Rewards />
        </div>
        <div className="col-span-1 row-span-2 space-y-5">
          <ReputationScore />
          <div className="mt-3">
            <VotedProposals />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20">
        <h1 className="font-extrabold text-4xl ">Recent Proposals</h1>
      </div>
      <div className="mt-5">
        <GovernorPageSlider />
        <GovernorPageSlider />
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
