"use client";
import React from "react";
import Image from "next/image";
import { useSampleData } from "@/context/researcher-proposal-context";
import { useRouter } from "next/navigation";
import { FiDownload, FiEdit } from "react-icons/fi";
import StatusBadge from "@/components/researcher/proposal-status";
import MyTimeline from "@/components/researcher/timeline";

const ResearcherProjectDetailsPage = () => {
  const { sampleData } = useSampleData();
  const router = useRouter();

  if (!sampleData) {
    router.push("/researcher");
    return null;
  }

  return (
    <div className="pm">
      <div className="mt-20 flex justify-between">
        <div className=" w-2/3 max-w-xl">
          <StatusBadge status={sampleData.status} />

          <h1 className="text-5xl font-extrabold mt-5">{sampleData.title}</h1>
        </div>
        <Image
          className="w-[35rem] h-[20rem] object-cover rounded-3xl"
          width={560}
          height={320}
          src={sampleData.image}
          alt="Project Illustration"
        />
      </div>
      <div className="flex mt-8 justify-between">
        {/* INFO */}
        <div className="w-[40rem]">
          <div className="">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Background</h2>
              <p className="mt-4 text-gray-600">{sampleData.background}</p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Aim</h2>
              <p className="mt-4 text-gray-600">{sampleData.aim}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold">Timeline</h2>
              <p className="mt-4 text-gray-600">{sampleData.timeline}</p>
              <div className="mt-5">
                <MyTimeline />
              </div>
            </div>
          </div>
        </div>
        {/* SIDEBAR */}
        <div className="w-[35rem] mb-10">
          <div className="mb-8 bg-white rounded-xl shadow-lg p-8 py-10">
            <h3 className="text-xl font-bold">Funds raised</h3>
            <div className="mt-4">
              <p>
                Number of donations:{" "}
                <span className="font-semibold">{sampleData.donations}</span>
              </p>
              <p>
                Tokens:{" "}
                <span className="font-semibold">{sampleData.funds}</span>
              </p>
            </div>
          </div>

          <div className="mb-8 bg-white rounded-xl shadow-lg p-8 flex items-center py-10">
            <div className="bg-green-200 p-4 rounded-full mr-4">
              <FiDownload className="text-green-800" size={24} />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Withdrawal</h4>
              {sampleData.status === "executed" ? (
                <>
                  <p className="text-gray-500">{sampleData.withdrawel} TR3</p>
                  <p className="text-sm text-gray-400">6 Sep 2024</p>
                </>
              ) : (
                <p className="text-gray-500">Withdrawal not available</p>
              )}
            </div>
          </div>

          <div className="mb-8 bg-white rounded-xl shadow-lg p-8 py-10">
            <h3 className="text-xl font-bold">Links</h3>
            <div className="mt-4">
              {sampleData.links.map((link, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <a href={link} className="text-blue-500 underline">
                    {link}
                  </a>
                  <FiEdit className="text-gray-500" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 py-10">
            <h3 className="text-xl font-bold">Members</h3>
            <div className="mt-4 space-y-2">
              {sampleData.members.map((member, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: member.color }}
                  />
                  <p className="text-sm font-mono">{member.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearcherProjectDetailsPage;
