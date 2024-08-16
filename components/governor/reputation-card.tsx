import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ReputationScore = () => {
  const progress = 79; // This is the progress percentage
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  // Function to determine color based on progress
  const getColor = (progress: number) => {
    if (progress >= 80) {
      return "green";
    } else if (progress >= 50) {
      return "#d4a017";
    } else {
      return "red";
    }
  };

  const strokeColor = getColor(progress);

  return (
    <Card className="shadow-lg rounded-xl flex items-center justify-center h-full">
      <CardContent className="flex flex-col items-center justify-center py-2">
        <div className="relative">
          <svg className="w-24 h-24" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke="lightgray"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r={radius}
              stroke={strokeColor}
              strokeWidth="10"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className="transition-all duration-500 ease-out"
              transform="rotate(-90 60 60)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`text-3xl font-bold ${
                progress >= 80
                  ? "text-green-600"
                  : progress >= 50
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              {progress}
            </span>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">Reputation Score</p>
        <p className="text-xs text-gray-500 mt-1">
          Aim for 80 to reach the next tier!
        </p>
      </CardContent>
    </Card>
  );
};

export default ReputationScore;
