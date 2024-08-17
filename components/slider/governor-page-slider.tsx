"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProposalCard from "@/components/proposal-card";
import { useRouter } from "next/navigation";
import { useGovernorProposal } from "@/context/governor-proposal-context";
import { sampleData } from "@/lib/example"; // Assuming sampleData is an array of proposals

const GovernorPageSlider = ({showDetails}: {showDetails: boolean}) => {
  const router = useRouter();
  const { setGovernorProposal } = useGovernorProposal();

  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {sampleData.map((data, index) => (
            <CarouselItem
              key={index} // Ensure each item has a unique key
              className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
              onClick={() => {
                setGovernorProposal(data);
                router.push("/governor/proposal");
              }}
            >
              <ProposalCard
                showDetails={showDetails}
                showProgress={true}
                tokensRaised={5000} // Assuming these fields are in your sampleData
                totalTokens={10000} // Adjust the field names according to your data structure
                endDate={"02 JUL 2023"} // Assuming this field is in your sampleData
                title={data.title} // Assuming title is in your sampleData
                description={data.background} // Assuming description is in your sampleData
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GovernorPageSlider;
