import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";

interface CardProps {
  showDetails?: boolean;
  showProgress?: boolean;
  tokensRaised?: number;
  totalTokens?: number;
  endDate?: string; // 2024-12-31T23:59:59Z
  title: string;
  description: string;
}

// Function to format the end date
function formatEndDate(dateStr: string | undefined): string {
  if (!dateStr) return '';

  const date = new Date(dateStr);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.error('Invalid date string:', dateStr);
    return 'Invalid date';
  }

  // Define the options for formatting
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  };

  // Create a formatted date string
  return new Intl.DateTimeFormat('en-GB', options).format(date);
}

const ProposalCard: React.FC<CardProps> = ({
  showDetails = false,
  showProgress = false,
  tokensRaised = 0,
  totalTokens = 50000, // Default total tokens
  endDate,
  title,
  description,
}) => {
  // Calculate progress percentage
  const progressPercentage = (tokensRaised / totalTokens) * 100;
  // Convert end date to a string 
  const endDateString = formatEndDate(endDate);

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
              End date: <span className="font-semibold">{endDateString}</span>
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ProposalCard;
