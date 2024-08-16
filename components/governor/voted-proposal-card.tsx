"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
const VotedProposals = () => {
  const router = useRouter();
  return (
    <a
      className="hover:cursor-pointer  mt-5"
      onClick={() => {
        // setSampleData(data);
        router.push("/governor/voted-proposals");
      }}
    >
      <Card className="bg-mainBlue shadow-lg rounded-xl">
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">Voted Proposals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex-center space-x-4">
            <p className="text-2xl font-semibold mt-2">4</p>
            <MdArrowOutward className="w-6 h-6 text-gray-600" />
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

export default VotedProposals;
