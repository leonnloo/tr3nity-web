import Image from 'next/image';
import { Button } from "@/components/ui/button"
import samepleImage from '@/public/image.png';

interface ProjectDetailsCardProps { 
    fundingReceived: string;
    contributors: string;
    endDays: string;
}

const ProjectDetailsCard: React.FC<ProjectDetailsCardProps> = ({ fundingReceived, contributors, endDays }) => {
    return (
        <div className="flex md:flex-row w-full mt-10 min-h-[50vh] mb-10"> {/* Changed to min-height */}
                    <div className="w-full md:w-1/2 aspect-video md:aspect-auto relative"> {/* Added aspect ratio */}
                        <Image
                            src={samepleImage}
                            alt="Research"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-xl md:rounded-l-xl md:rounded-r-none"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="text-xl sm:text-2xl md:text-3xl flex flex-col justify-center items-start h-full border-t border-r border-b rounded-xl md:rounded-l-none md:rounded-r-xl p-4 md:p-6"> {/* Adjusted padding and font sizes */}
                            <div className="w-full">
                                <div className="">Funding received</div>
                                <div className="font-bold mb-3 md:mb-5">{fundingReceived} TR3</div>
                                <div className="">Contributors</div>
                                <div className="font-bold mb-3 md:mb-5">{contributors}</div>
                                <div className="">Ends in</div>
                                <div className="font-bold mb-6 md:mb-10">{endDays} days</div>
                                <Button className='bg-mainBlue rounded-3xl h-12 md:h-16 w-full text-base md:text-lg font-semibold' variant="outline">Add to cart</Button>
                            </div>
                        </div>
                    </div>

                </div>
    );
};

export default ProjectDetailsCard;