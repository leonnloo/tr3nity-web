import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Rewards = () => {
  return (
    <Card className="shadow-lg rounded-xl h-full">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Your Rewards</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-5">30.01 TR3 Token</div>
        <p className="text-gray-600">
          Only the proposals that successfully publish will receive rewards:
        </p>
        <ul className="mt-4 list-disc list-inside text-gray-600">
          <li>Reputation 1-3 → get 0.05%</li>
          <li>Reputation 4-7 → get 0.075%</li>
          <li>Reputation 8-10 → get 0.1%</li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Rewards;
