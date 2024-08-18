"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import axios from 'axios'; // Import axios for making HTTP requests
import { FiInfo } from "react-icons/fi"; // Example icon, replace with your preferred icon
import { govenorWalletAddress } from "@/app/governor/page";

const Rewards = () => {
  const [currentReputation, setCurrentReputation] = useState<number | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const nextTierReputation = 80; // Next reputation tier
  
  const fetchReputation = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_project/reputation_score/${govenorWalletAddress}`);
      if (response.data.status === 'success') {
        setCurrentReputation(response.data.data); // Set the current reputation
      } else {
        setError('Failed to load reputation');
      }
    } catch (error) {
      console.error('Error fetching reputation:', error);
      setError('Failed to load reputation');
    }
  };

  const fetchBalance = async () => {
    try {

      const data = {
        wallet_address: govenorWalletAddress
      };

      console.log('Sending data:', data); // Debugging: log the data being sent
      
      const response = await axios.post(`${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_token/api_check_balance`, data);

      setBalance(parseFloat(response.data.data.result));
      
    } catch (error) {
      console.error('Error fetching balance:', error);
      setError('Failed to load balance');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchReputation();
      await fetchBalance();
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Card className="shadow-lg rounded-xl h-full">
        <CardContent className="flex items-center justify-center py-10">
          <p className="text-lg text-gray-600">Loading...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="shadow-lg rounded-xl h-full">
        <CardContent className="flex items-center justify-center py-10">
          <p className="text-lg text-red-600">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (currentReputation === null || balance === null) {
    return null; // or a placeholder if you prefer
  }

  const progressValue = (currentReputation / nextTierReputation) * 100;

  return (
    <Card className="shadow-lg rounded-xl h-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Your Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-5">
          <div className="text-4xl font-bold">{balance.toFixed(2)} TR3</div>
          <div className="ml-3 text-gray-500 text-sm">Token</div>
        </div>

        <p className="text-gray-600">
          Only the proposals that successfully publish will receive rewards:
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>Reputation 10-30 → get 0.05%</li>
          <li>
            Reputation 40-70 → get 0.075% <FiInfo className="inline ml-2 text-blue-500" />
          </li>
          <li>Reputation 80-100 → get 0.1%</li>
        </ul>

        {/* Progress bar for Reputation */}
        <div className="mt-6">
          <p className="text-gray-600 mb-2">Next Tier: {nextTierReputation} Reputation</p>
          <Progress value={progressValue} className="w-full mb-2" />
          <p className="text-sm text-gray-500">
            Current Reputation: <span className="font-semibold">{currentReputation}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Rewards;
