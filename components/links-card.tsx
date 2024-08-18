import { useResearcherSampleData } from "@/context/researcher-proposal-context";
import React from "react";
import { FiEdit } from "react-icons/fi";

const LinksComponent = ({ links }: { links: string }) => {
  const { researcherSampleData } = useResearcherSampleData();

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 py-10">
      <h3 className="text-xl font-bold">Links</h3>
      <div className="mt-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Always rendered link */}
          <div className="w-full max-w-full">
            <a
              href={links}
              className="text-blue-500 underline overflow-hidden text-ellipsis whitespace-nowrap block"
              target="_blank"
              rel="noopener noreferrer"
            >
              {links}
            </a>
            <FiEdit className="text-gray-500 mt-2" />
          </div>

          {/* Conditionally rendered link */}
          {researcherSampleData && researcherSampleData.status === "executed" && (
            <div className="w-full max-w-full">
              <a
                href="https://storage-testnet.maschain.com/f9c1d2da7eaf4b288421e77b98b83481/image/5901565a0d2d42ae9856b02bb85335fd20240818111139.png"
                className="text-blue-500 underline overflow-hidden text-ellipsis whitespace-nowrap block"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://storage-testnet.maschain.com/f9c1d2da7eaf4b288421e77b98b83481/image/5901565a0d2d42ae9856b02bb85335fd20240818111139.png
              </a>
              <FiEdit className="text-gray-500 mt-2" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinksComponent;
