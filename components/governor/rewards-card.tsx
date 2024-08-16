import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FiInfo } from "react-icons/fi"; // Example icon, replace with your preferred icon

const Rewards = () => {
  const currentReputation = 4.5; // Example reputation
  const nextTierReputation = 7; // Next reputation tier
  
  const progressValue = (currentReputation / nextTierReputation) * 100;

  return (
    <Card className="shadow-lg rounded-xl h-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Your Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center mb-5">
          <div className="text-4xl font-bold">30.01 TR3</div>
          <div className="ml-3 text-gray-500 text-sm">Token</div>
        </div>

        <p className="text-gray-600">
          Only the proposals that successfully publish will receive rewards:
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>Reputation 1-3 → get 0.05%</li>
          <li>
            Reputation 4-7 → get 0.075% <FiInfo className="inline ml-2 text-blue-500" />
          </li>
          <li>Reputation 8-10 → get 0.1%</li>
        </ul>

        {/* Progress bar for Reputation */}
        <div className="mt-6">
          <p className="text-gray-600 mb-2">Next Tier: {nextTierReputation} Reputation</p>
          <Progress value={progressValue} className="w-full mb-2" />
          <p className="text-sm text-gray-500">
            Current Reputation: <span className="font-semibold">{currentReputation}</span>
          </p>
        </div>

        {/* Call to Action */}
        {/* <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-full">
          Learn More
        </button> */}
      </CardContent>
    </Card>
  );
};

export default Rewards;
