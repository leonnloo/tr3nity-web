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
import { useGovernorSampleData } from "@/context/governor-proposal-context";
import { sampleData } from "@/lib/example";

const GovernorPageSlider = () => {
  const router = useRouter();
  const { setGovernorSampleData } = useGovernorSampleData();
  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
            onClick={() => {
              // TODO: Change dynamic data
              setGovernorSampleData(sampleData[0]);
              router.push("/governor/proposal");
            }}
          >
            <ProposalCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
            <ProposalCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
            <ProposalCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
            <ProposalCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
            <ProposalCard />
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
            <ProposalCard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default GovernorPageSlider;
