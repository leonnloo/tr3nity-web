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
}

const ProposalCard: React.FC<CardProps> = ({
  showDetails = false,
  showProgress = false,
  tokensRaised = 0,
  totalTokens = 50000, // Default total tokens
  endDate = "02 JUL 2023",
}) => {
  // Calculate progress percentage
  const progressPercentage = (tokensRaised / totalTokens) * 100;

  return (
    <Link href={""}>
      <Card className="w-full max-w-md m-5 hover:scale-105 transition-transform transform">

        <Image
          src={"/sample-1.png"} // Ensure this path is correct for your image
          width={300}
          height={200}
          alt="Research"
          className="h-48 w-full object-cover rounded-t-xl"
        />
        <CardHeader>
          <CardTitle>Early Detection of Gestational Diabetes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            Researching non-invasive methods for the early detection of
            gestational diabetes to ensure healthier pregnancies.
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
    </Link>
  );
};

export default ProposalCard;
