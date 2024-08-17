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
    items: { id: number; [key: string]: any }[]; // Adjust the shape according to your data
    type: 'project' | 'grant'; // Example types, adjust based on your use case
  }
  

  const MainPageSlider: React.FC<MainPageSliderProps> = ({ items = [], type }) => {
    console.log("MainPageSlider items:", items, "type:", type);
    return (
      <div>
        <Carousel>
          <CarouselContent className="-ml-2 md:-ml-4">
            {Array.isArray(items) ? (
              items.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
                  <Link 
                    href={`/${type}-details/${item.id}`}
                    passHref 
                    legacyBehavior
                  >
                    <ProposalCard showDetails={type === 'project'} />
                  </Link>
                </CarouselItem>
              ))
            ) : (
              <p>No items available</p> // Optional: Handle case where items is not an array
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
  };

export default MainPageSlider;


