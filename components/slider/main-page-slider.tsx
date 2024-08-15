import Link from 'next/link';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import ProposalCard from "@/components/proposal-card";

const MainPageSlider = () => {
    const proposalIds = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {proposalIds.map((id) => (
                        <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                            <Link href={`/grant-details/${id}`} passHref legacyBehavior>
                                <ProposalCard />
                            </Link>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default MainPageSlider