import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ReputationScore = () => {
  return (
    <Card className="shadow-lg rounded-xl flex items-center justify-center">
      <CardContent className="flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <svg className="w-20 h-20" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                strokeWidth="2"
                fill="none"
                d="M18 1.0845
                      a 16.9155 16.9155 0 0 1 0 33.831
                      a 16.9155 16.9155 0 0 1 0 -33.831"
              />
              <path
                className="text-green-500"
                strokeDasharray="69, 100"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                d="M18 1.0845
                      a 16.9155 16.9155 0 0 1 0 33.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-semibold">69</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">Reputation Score</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReputationScore;
