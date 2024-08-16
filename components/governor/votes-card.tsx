import React from "react";

const VotesCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 py-10">
      <h3 className="text-2xl font-bold">Votes</h3>
      <div className="mt-4">
        {/* For Votes */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">For</span>
          <div className="flex items-center">
            <div className="lg:w-44  xl:w-60 h-2 bg-green-200 rounded-full mr-4"></div>
            <button className="w-20 bg-green-200 rounded-full">
              <span className=" text-green-900 font-semibold  px-3 py-4 text-sm  text-center">
                For
              </span>
            </button>
          </div>
        </div>

        {/* Against Votes */}
        <div className="flex items-center justify-between">
          <span className="text-lg">Against</span>
          <div className="flex items-center">
            <div className="lg:w-44  xl:w-60 h-2 bg-red-200 rounded-full mr-4"></div>
            <button className="bg-red-200 w-20 rounded-full ">
              <span className=" text-red-900 font-semibold px-3 py-4 text-sm text-center">
                Against
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotesCard;
