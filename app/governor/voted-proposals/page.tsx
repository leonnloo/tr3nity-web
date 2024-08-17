import GovernorPageSlider from "@/components/slider/governor-page-slider";
import React from "react";

const GovernorsMainPage = () => {
  return (
    <div className="pm flex flex-col my-16">
      <h1 className="font-extrabold text-4xl ">Voted Proposals</h1>
      <div className="mt-5">
        <GovernorPageSlider showDetails={true} />
        <GovernorPageSlider showDetails={true} />
      </div>
    </div>
  );
};

export default GovernorsMainPage;
