import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

interface CardProps {
  showDetails?: boolean;
  showProgress?: boolean;
  tokensRaised?: number;
  totalTokens?: number;
  endDate?: string;
  title: string;
  description: string;
}

const ProposalCard: React.FC<CardProps> = ({
  showDetails = false,
  showProgress = false,
  tokensRaised = 0,
  totalTokens = 50000, // Default total tokens
  endDate = "02 JUL 2023",
  title,
  description,
}) => {
  // Calculate progress percentage
  const progressPercentage = (tokensRaised / totalTokens) * 100;

  return (
    <Card className="w-full max-w-md m-5 hover:scale-105 transition-transform transform">
      <Image
        src={"/sample-1.png"} // Ensure this path is correct for your image
        width={300}
        height={200}
        alt="Research"
        className="h-48 w-full object-cover rounded-t-xl"
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p
          className="text-gray-600 mb-4"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </p>

        {showDetails && (
          <>
            {showProgress && (
              <>
                <Progress value={progressPercentage} className="w-full mb-2" />
                <p className="text-sm text-gray-600">
                  {tokensRaised} TR3 ≈ {totalTokens} TR3 raised
                </p>
              </>
            )}
            <p className="text-sm text-gray-600">
              End date: <span className="font-semibold">{endDate}</span>
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProposalCard;
