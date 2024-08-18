"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import axios from 'axios'; // Import axios for making HTTP requests
import { govenorWalletAddress } from "@/app/governor/page";

const ReputationScore = () => {
  const [progress, setProgress] = useState<number | null>(null); // State to store progress
  const [loading, setLoading] = useState<boolean>(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error handling

  const radius = 45;
  const circumference = 2 * Math.PI * radius;

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

  // Fetch the progress from the API
  const fetchProgress = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_project/reputation_score/${govenorWalletAddress}`);
      if (response.data.status === 'success') {
        setProgress(response.data.data); // Update progress with the response data
      } else {
        setError('Failed to load progress');
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
      setError('Failed to load progress');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  if (loading) {
    return (
      <Card className="shadow-lg rounded-xl flex items-center justify-center h-full">
        <CardContent className="flex flex-col items-center justify-center py-2">
          <p className="text-lg text-gray-600">Loading...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="shadow-lg rounded-xl flex items-center justify-center h-full">
        <CardContent className="flex flex-col items-center justify-center py-2">
          <p className="text-lg text-red-600">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (progress === null) {
    return null; // or a placeholder if you prefer
  }

  const offset = circumference - (progress / 100) * circumference;
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
