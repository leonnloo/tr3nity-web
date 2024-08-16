"use client";
import React from "react";
import Image from "next/image";
import { useResearcherSampleData } from "@/context/researcher-proposal-context";
import { useRouter } from "next/navigation";
import { FiDownload, FiEdit } from "react-icons/fi";
import StatusBadge from "@/components/researcher/proposal-status";
import MyTimeline from "@/components/researcher/timeline";
import { Button } from "@/components/ui/button";
import LinksComponent from "@/components/links-card";
import MembersComponent from "@/components/members-card";
import FundsComponent from "@/components/researcher/funds-card";
import WithdrawalComponent from "@/components/researcher/withdrawal-card";

const ResearcherProjectDetailsPage = () => {
  const { researcherSampleData } = useResearcherSampleData();
  const router = useRouter();

  if (!researcherSampleData) {
    router.push("/researcher");
    return null;
  }

  return (
    <div className="pm">
      <div className="mt-20 flex justify-between">
        <div className=" w-2/3 max-w-xl">
          <StatusBadge status={researcherSampleData.status} />

          <h1 className="text-5xl font-extrabold mt-5">
            {researcherSampleData.title}
          </h1>
        </div>
        <Image
          className="w-[35rem] h-[20rem] object-cover rounded-3xl"
          width={560}
          height={320}
          src={researcherSampleData.image}
          alt="Project Illustration"
        />
      </div>
      <div className="flex mt-8 justify-between">
        {/* INFO */}
        <div className="w-[40rem]">
          <div className="">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Background</h2>
              <p className="mt-4 text-gray-600">
                {researcherSampleData.background}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Aim</h2>
              <p className="mt-4 text-gray-600">{researcherSampleData.aim}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold">Timeline</h2>
              <p className="mt-4 text-gray-600">
                {researcherSampleData.timeline}
              </p>
              <div className="mt-8">
                <Button className="rounded-full px-4">Update</Button>
                <MyTimeline />
              </div>
            </div>
          </div>
        </div>
        {/* SIDEBAR */}
        <div className="w-[35rem] mb-10 space-y-8">
          <FundsComponent
            status={researcherSampleData.status}
            donations={researcherSampleData.donations}
            funds={researcherSampleData.funds}
          />
          <WithdrawalComponent
            status={researcherSampleData.status}
            withdrawel={researcherSampleData.withdrawel}
            withdrawalDate="6 Sep 2024" // You can change the date format as required
          />

          <LinksComponent links={researcherSampleData.links} />
          <MembersComponent members={researcherSampleData.members} />
        </div>
      </div>
    </div>
  );
};

export default ResearcherProjectDetailsPage;
