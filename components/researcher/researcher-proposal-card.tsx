"use client";
import React from "react";
import Image from "next/image";
import StatusBadge from "./proposal-status";
import { useRouter } from "next/navigation";
import { useResearcherSampleData } from "@/context/researcher-proposal-context";
import { sampleDataType } from "@/lib/example";

const ResearcherProposalCard = ({ data }: { data: sampleDataType }) => {
  const router = useRouter();
  const { setResearcherSampleData } = useResearcherSampleData();
  return (
    <a
      className="hover:cursor-pointer  mt-5"
      onClick={() => {
        setResearcherSampleData(data);
        router.push("/researcher/project-details");
      }}
    >
      <div className="py-10 p-6 bg-white rounded-lg shadow-xl flex items-start">
        <div className="flex-1 flex flex-col items-start mt-5">
          <div className="flex items-center space-x-2 mb-4">
            <StatusBadge status={data.status} />
            <span className="text-sm text-gray-500">{data.duration}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 w-2/3 max-w-lg">
            {data.title}
          </h2>
        </div>
        <div className="flex-shrink-0 ml-4">
          <Image
            className="w-80 h-52 object-cover rounded-xl"
            width={320}
            height={208}
            src={data.image}
            alt="Gestational Diabetes Illustration"
          />
        </div>
      </div>
    </a>
  );
};

export default ResearcherProposalCard;
