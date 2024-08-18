"use client";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProposalCard from "@/components/proposal-card";
import { Grant, Project } from "@/utils/mockData";
import { useGrant } from "@/context/grant-context";
import { useProject } from "@/context/project-context";
import { useRouter } from "next/navigation";

interface MainPageSliderProps {
  grants?: Grant[];
  projects?: Project[];
  type: "project" | "grant";
}

const MainPageSlider: React.FC<MainPageSliderProps> = ({
  grants,
  projects,
  type,
}) => {
  const items = type === "project" ? projects : grants;
  const { setGrant } = useGrant();
  const { setProject } = useProject();
  const router = useRouter();
  return (
    <div>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <CarouselItem
                key={item.id}
                className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4"
              >
                <button
                className="text-left"
                  onClick={() => {
                    if ("program_name" in item) {
                      setGrant(item as Grant);
                      router.push(`/${type}-details/${item.id}`);
                    } else if ("project_name" in item) {
                      setProject(item as Project);
                      router.push(`/${type}-details/${item.id}`);
                    }
                  }}
                >
                  <ProposalCard
                    showDetails={true}
                    title={
                      "project_name" in item
                        ? (item as Project).project_name
                        : (item as Grant).program_name
                    }
                    description={item.description}
                    endDate={item.end_fund}
                  />
                </button>
              </CarouselItem>
            ))
          ) : (
            <p>No items available</p>
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MainPageSlider;
