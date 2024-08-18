"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils"; // Assuming you have a utility for classNames
import axios from 'axios'; // Import axios for making HTTP requests
import { govenorWalletAddress } from "@/app/governor/page";

const VotedProposals = () => {
  const [voteCount, setVoteCount] = useState<number | null>(null); // State to store vote count
  const [loading, setLoading] = useState<boolean>(true); // State for loading status
  const [error, setError] = useState<string | null>(null); // State for error handling

  const router = useRouter();

  // Fetch data from API when component mounts
  useEffect(() => {
    const fetchVoteCount = async () => {
      try {
        // Make GET request to fetch vote count
        const response = await axios.get(`${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_project/vote_count/${govenorWalletAddress}`);

        // Check for success status
        if (response.data.status === 'success') {
          setVoteCount(response.data.data); // Access the 'data' field from response
        } else {
          setError('Failed to load vote count');
        }
      } catch (error) {
        console.error('Error fetching vote count:', error);
        setError('Failed to load vote count');
      } finally {
        setLoading(false);
      }
    };

    fetchVoteCount();
  }, []);

  return (
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
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : error ? (
          <p className="text-white">Error: {error}</p>
        ) : (
          <div className="flex-center space-x-4 text-white">
            <p className="text-4xl font-semibold mt-2">{voteCount ?? 0}</p>
            <MdArrowOutward className="w-8 h-8 transition-transform transform hover:translate-x-2" />
          </div>
        )}
        <p className="mt-2 text-sm text-white opacity-75">
          View all the proposals you have participated in
        </p>
      </CardContent>
    </Card>
  );
};

export default VotedProposals;
