import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import samepleImage from "@/public/sample-1.png";
import { useCart } from "@/context/cart-context"; // Import the CartContext
import { useRouter } from "next/navigation";
import { Project } from "@/utils/mockData";
import { toast } from "../ui/use-toast";

interface ProjectDetailsCardProps {
  project: Project;
  fundingReceived: string;
  contributors: string;
  endDays: string;
}

const ProjectDetailsCard: React.FC<ProjectDetailsCardProps> = ({
  project,
  fundingReceived,
  contributors,
  endDays,
}) => {
  const { addItemToCart } = useCart(); // Use CartContext
  const router = useRouter();

  const handleAddToCart = () => {
    // Call addItemToCart and pass the project to it
    addItemToCart({ project });
    toast({
      title: "Added to Cart",
      description: `${project.project_name} has been added to your cart`,
      
    });
  };

  return (
    <div className="flex md:flex-row w-full mt-10 min-h-[50vh] mb-10">
      <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative">
        <Image
          src={samepleImage}
          alt="Research"
          layout="fill"
          objectFit="cover"
          className="rounded-xl md:rounded-l-xl md:rounded-r-none"
        />
      </div>
      <div className="w-full md:w-1/2">
        <div className="text-xl sm:text-2xl md:text-3xl flex flex-col justify-center items-start h-full border-t border-r border-b rounded-xl md:rounded-l-none md:rounded-r-xl p-4 md:p-6">
          <div className="w-full">
            <div>Funding received</div>
            <div className="font-bold mb-3 md:mb-5">{fundingReceived} TR3</div>
            <div>Contributors</div>
            <div className="font-bold mb-3 md:mb-5">{contributors}</div>
            <div>Ends in</div>
            <div className="font-bold mb-6 md:mb-10">{endDays} days</div>
            <Button
              className="bg-mainBlue rounded-3xl h-12 md:h-16 w-full text-base md:text-lg font-semibold"
              variant="outline"
              onClick={handleAddToCart} // Add this to handle the click event
            >
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
