import React, { useState } from "react";
import axios from 'axios'; // Import axios for making HTTP requests
import { toast } from "../ui/use-toast"; // Import toast function for notifications
import { govenorWalletAddress } from "@/app/governor/page";

const VotesCard = ({ projectId }: { projectId: number }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVote = async (voteType: 'yes' | 'no') => {
    setLoading(true);
    setError(null);

    try {
      // Create json data to post
      const data = {
        project_id: projectId,
        validator_address: govenorWalletAddress,
        vote_choice: voteType
      };

      console.log('Sending data:', data); // Debugging: log the data being sent

      // Make POST request
      const response = await axios.post(`${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_project/vote`, data);

      console.log('Response:', response); // Debugging: log the API response

      if (response.data.status == "error") {
        toast({
          title: response.data.message,
        });
      } else if (response.status === 200) {
        toast({
          title: "Vote submitted successfully",
        });
      }
      else {
        toast({
          title: "Failed to submit vote",
          description: `Error: ${response.statusText}`,
        });
      }
    } catch (err) {
      console.error('Error:', err); // Debugging: log the error

      if (axios.isAxiosError(err)) {
        // Handle known axios errors
        toast({
          title: "Error",
          description: `Failed to submit vote: ${err.response?.data?.message || err.message}`,
        });
        setError(err.message);
      } else {
        // Handle unexpected errors
        toast({
          title: "Unexpected Error",
          description: "An unexpected error occurred. Please try again later.",
        });
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 py-10">
      <h3 className="text-2xl font-bold">Votes</h3>
      <div className="mt-4">
        {/* For Votes */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg">For</span>
          <div className="flex items-center">
            <div className="lg:w-44 xl:w-60 h-2 bg-green-200 rounded-full mr-4"></div>
            <button
              className="w-20 bg-green-200 rounded-full"
              onClick={() => handleVote('yes')}
              disabled={loading}
            >
              <span className="text-green-900 font-semibold px-3 py-4 text-sm text-center">
                For
              </span>
            </button>
          </div>
        </div>

        {/* Against Votes */}
        <div className="flex items-center justify-between">
          <span className="text-lg">Against</span>
          <div className="flex items-center">
            <div className="lg:w-44 xl:w-60 h-2 bg-red-200 rounded-full mr-4"></div>
            <button
              className="bg-red-200 w-20 rounded-full "
              onClick={() => handleVote('no')}
              disabled={loading}
            >
              <span className="text-red-900 font-semibold px-3 py-4 text-sm text-center">
                Against
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotesCard;
