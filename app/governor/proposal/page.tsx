"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import MyTimeline from "@/components/researcher/timeline";
import { useGovernorProposal } from "@/context/governor-proposal-context";
import VotesCard from "@/components/governor/votes-card";
import DaysLeft from "@/components/days-left";
import LinksComponent from "@/components/links-card";
import MembersComponent from "@/components/members-card";

const GovernorResearcherProjectDetailsPage = () => {
  const { governorProposal } = useGovernorProposal();
  const router = useRouter();

  if (!governorProposal) {
    router.push("/governor");
    return null;
  }

  return (
    <div className="pm">
      <div className="mt-20 flex justify-between">
        <div className=" w-2/3 max-w-xl">
          {/* <StatusBadge status={governorProposal.status} /> */}
          <DaysLeft remainingDays={governorProposal.remaingDays!} />
          <h1 className="text-5xl font-extrabold mt-5">
            {governorProposal.title}
          </h1>
        </div>
        <Image
          className="w-[35rem] h-[20rem] object-cover rounded-3xl"
          width={560}
          height={320}
          src={governorProposal.image}
          alt="Project Illustration"
        />
      </div>
      <div className="flex mt-8 justify-between">
        {/* INFO */}
        <div className="w-1/2">
          <div className="">
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Background</h2>
              <p className="mt-4 text-gray-600">
                {governorProposal.background}
              </p>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold">Aim</h2>
              <p className="mt-4 text-gray-600">{governorProposal.aim}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold">Timeline</h2>
              <p className="mt-4 text-gray-600">{governorProposal.timeline}</p>
              <div className="mt-8">
                {/* <Button className="rounded-full px-4">Update</Button> */}
                <MyTimeline />
              </div>
            </div>
          </div>
        </div>
        {/* SIDEBAR */}
        <div className="w-[35rem] mb-10 space-y-8">
          <VotesCard projectId={governorProposal.id} />

          <LinksComponent links={governorProposal.links} />
          <MembersComponent members={governorProposal.members} />
        </div>
      </div>
    </div>
  );
};

export default GovernorResearcherProjectDetailsPage;
