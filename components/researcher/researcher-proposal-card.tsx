import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import StatusBadge from "./proposal-status";

interface ResearcherProposalCardProps {
  status: "active" | "executed" | "rejected";
  imageUrl: StaticImageData;
  title: string;
  duration: string;
}

const ResearcherProposalCard: React.FC<ResearcherProposalCardProps> = ({
  status,
  imageUrl,
  title,
  duration,
}) => {
  return (
    <Link href={"/researcher/project-details"}>
      <div className="py-10 p-6 bg-white rounded-lg shadow-xl flex items-start mt-5">
        <div className="flex-1 flex flex-col items-start mt-5">
          <div className="flex items-center space-x-2 mb-4">
            <StatusBadge status={status} />
            <span className="text-sm text-gray-500">{duration}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 w-2/3 max-w-lg">
            {title}
          </h2>
        </div>
        <div className="flex-shrink-0 ml-4">
          <Image
            className="w-80 h-52 object-cover rounded-xl"
            width={320}
            height={208}
            src={imageUrl}
            alt="Gestational Diabetes Illustration"
          />
        </div>
      </div>
    </Link>
  );
};

export default ResearcherProposalCard;
