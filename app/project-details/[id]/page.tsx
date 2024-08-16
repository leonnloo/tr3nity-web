import ProjectDetailsCard from "@/components/cards/project-details-card";
import { fetchProjects } from "@/utils/mockData";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Footer } from '@/components/footer/footer';


export default async function ProjectDetails({ params }: { params: { id: string } }) {
    const projects = await fetchProjects();
    const project = projects.find(p => p.id === parseInt(params.id));
    console.log("Project Details page rendered with id:", params.id);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <div className='pm'>

                <ProjectDetailsCard fundingReceived='59,000' contributors="68" endDays="69"></ProjectDetailsCard>
                <div className='flex flex-col space-y-5'>

                    <div className="text-2xl font-bold">Early Detection of Gestational Diabetes</div>
                    <div>Early detection of gestational diabetes mellitus (GDM) is critical for managing risks to both the mother and the baby. GDM can lead to complications such as preeclampsia, increased risk of cesarean delivery, and a higher likelihood of the mother developing type 2 diabetes later in life. For the baby, GDM increases the risk of macrosomia (excessive birth weight), which can lead to delivery complications, as well as future metabolic issues. Research into early detection focuses on identifying biomarkers and risk factors that can be screened in the first trimester, such as blood glucose levels, body mass index, and family history of diabetes. Advances in technology, like continuous glucose monitoring and machine learning algorithms, are also being explored to improve early diagnosis and personalized treatment plans, thereby enhancing maternal and fetal outcomes.</div>
                    <div className="text-2xl font-bold">Highlights</div>
                    <div className='space-y-3'>
                        <li>
                            Lorum Ipsum
                        </li>
                        <li>
                            Lorum Ipsum
                        </li>
                        <li>
                            Lorum Ipsum
                        </li>
                    </div>
                    <div>
                        <div className="text-2xl font-bold" >The team</div>
                        <div className="text-md font-semibold" >Leony company</div>
                    </div>
                    <div className='flex flex-row space-x-10 mb-10'>
                        <div className="flex flex-col items-center">
                            <Avatar className="w-16 h-16 mb-2"> {/* Added margin bottom */}
                                <AvatarImage className='w-full h-full' src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">John Doe</span> {/* Name added */}
                        </div>
                        <div className="flex flex-col items-center">
                            <Avatar className="w-16 h-16 mb-2">
                                <AvatarImage className='w-full h-full' src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">Jane Smith</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Avatar className="w-16 h-16 mb-2">
                                <AvatarImage className='w-full h-full' src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <span className="text-sm font-medium">Alex Johnson</span>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </main>
    )
}