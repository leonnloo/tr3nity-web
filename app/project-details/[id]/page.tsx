"use client";
import ProjectDetailsCard from "@/components/cards/project-details-card";
import { fetchProject } from "@/utils/mockData";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useProject } from "@/context/project-context";
import { toast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function ProjectDetails() {
  const params = useParams();
  const { project, setProject } = useProject();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    // Fetch projects data
    const getData = async () => {
      try {
        if (!project) {
          const project = await fetchProject(Number(params.id));
          setProject(project);
        }
        setLoading(false);
      } catch (error) {
        toast({
          title: "Error while fetching data",
          description: "Please try again later",
        });
        router.push("/");
        return null;
      }
    };

    getData();
  });

  if (!project) {
    toast({
      title: "project not found",
      description: "Please select a project before proceeding to this page",
    });
    router.push("/");
    return null;
  }

  if (loading) {
    return <div className="">Loading...</div>;
  }

  return (
    <main className="min-h-screen">
      <div className="pm">
        <ProjectDetailsCard
          project={project}
          fundingReceived="59,000"
          contributors="68"
          endDays="69"
        ></ProjectDetailsCard>
        <div className="flex flex-col space-y-5">
          <div className="text-2xl font-bold">{project.project_name}</div>
          <div>{project.description}</div>
          <div className="text-2xl font-bold">Highlights</div>
          <div className="space-y-3">
            <li>This is the highlight of the research</li>
            <li>This is the highlight of the research</li>
            <li>This is the highlight of the research</li>
          </div>
          <div>
            <div className="text-2xl font-bold">The team</div>
            <div className="text-md font-semibold">Leony company</div>
          </div>
          <div className="flex flex-row space-x-10 mb-10">
            <div className="flex flex-col items-center">
              <Avatar className="w-16 h-16 mb-2">
                {" "}
                {/* Added margin bottom */}
                <AvatarImage
                  className="w-full h-full"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">John Doe</span>{" "}
              {/* Name added */}
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarImage
                  className="w-full h-full"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Jane Smith</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar className="w-16 h-16 mb-2">
                <AvatarImage
                  className="w-full h-full"
                  src="https://github.com/shadcn.png"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">Alex Johnson</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
