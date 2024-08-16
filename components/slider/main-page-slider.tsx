import Link from 'next/link';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProposalCard from "@/components/proposal-card";

interface Item {
  id: number;
  // other common fields
}

interface MainPageSliderProps {
  items: Item[];
  type: 'project' | 'grant';
}

const MainPageSlider: React.FC<MainPageSliderProps> = ({ items, type }) => {
    
    return (
        <div>
            <Carousel>
                <CarouselContent className="-ml-2 md:-ml-4">
                    {items.map((item) => (
                        <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                            <Link 
                              href={`/${type}-details/${item.id}`}
                              passHref 
                              legacyBehavior
                            >
                                <ProposalCard showDetails={type === 'project'} />
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

export default MainPageSlider;