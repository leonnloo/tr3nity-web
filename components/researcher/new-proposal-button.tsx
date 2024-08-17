"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const NewProposalButton = () => {
  const router = useRouter();
  return (
    <Button
      className="rounded-full px-6 py-6 bg-mainBlue text-lg text-black hover:bg-[#91d5ff]"
      onClick={() => router.push("/researcher/new-proposal")}
    >
      New Proposals
    </Button>
  );
};

export default NewProposalButton;
