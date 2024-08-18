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
  const [teamMembers, setTeamMembers] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch project data
    const getData = async () => {
      try {
        if (!project) {
          const fetchedProject = await fetchProject(Number(params.id));
          setProject(fetchedProject);
          // Directly use team_members if it's an array of strings
          if (fetchedProject.team_members) {
            setTeamMembers(fetchedProject.team_members);
          }
        } else {
          // Use existing project data if already loaded
          if (project.team_members) {
            setTeamMembers(project.team_members);
          }
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
  }, [project, params.id, router, setProject]);

  if (!project) {
    toast({
      title: "Project not found",
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
          fundingReceived={project.current_fund.toString()}
          contributors={project.total_contributors.toString()}
          endDays={project.remaining_days.toString()}
        />
        <div className="flex flex-col space-y-5">
          <div className="text-2xl font-bold">{project.project_name}</div>
          <div>{project.description}</div>
          <div className="text-2xl font-bold">Aim</div>
          <div className="space-y-3">
            <div>{project.aim}</div>
          </div>
          <div className="text-2xl font-bold">Timeline</div>
          <div className="space-y-3">
            <div>{project.timeline}</div>
          </div>
          <div>
            <div className="text-2xl font-bold">The team</div>
          </div>
          <div className="flex flex-row space-x-10 mb-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <Avatar className="w-16 h-16 mb-2">
                  <AvatarImage
                    className="w-full h-full"
                    src={`https://github.com/shadcn.png`} // Replace with actual URL for each team member if available
                    alt={member}
                  />
                  <AvatarFallback>{member.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{member}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
