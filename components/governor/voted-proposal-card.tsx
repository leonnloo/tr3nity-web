"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utility for classNames

const VotedProposals = () => {
  const router = useRouter();
  return (
    <a
      className="hover:cursor-pointer"
      onClick={() => {
        router.push("/governor/voted-proposals");
      }}
    >
      <Card
        className={cn(
          "bg-gradient-to-r bg-mainBlue shadow-lg rounded-xl h-full flex-col-center transition-transform transform hover:scale-105 hover:shadow-2xl"
        )}
      >
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-3xl font-bold text-white">
            Voted Proposals
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex-center space-x-4 text-white">
            <p className="text-4xl font-semibold mt-2">4</p>
            <MdArrowOutward className="w-8 h-8 transition-transform transform hover:translate-x-2" />
          </div>
          <p className="mt-2 text-sm text-white opacity-75">
            View all the proposals you have participated in
          </p>
        </CardContent>
      </Card>
    </a>
  );
};

export default VotedProposals;
