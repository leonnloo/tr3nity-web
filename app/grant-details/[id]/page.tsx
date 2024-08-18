"use client";
import MainPageSlider from "@/components/slider/main-page-slider";
import { toast } from "@/components/ui/use-toast";
import { useGrant } from "@/context/grant-context";
import { fetchGrant, fetchProjectsUnderGrant, Project } from "@/utils/mockData";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Function to format dates without time
function formatDateRange(startDateStr: string | undefined, endDateStr: string | undefined): string {
  if (!startDateStr || !endDateStr) return '';

  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  const dateOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  };

  const startDateFormatted = new Intl.DateTimeFormat('en-GB', { ...dateOptions }).format(startDate);
  const endDateFormatted = new Intl.DateTimeFormat('en-GB', { ...dateOptions }).format(endDate);

  return `${startDateFormatted} - ${endDateFormatted}`;
}

export default function GrantDetails() {
  const params = useParams();
  const { grant, setGrant } = useGrant();
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch grants data
    const getData = async () => {
      try {
        if (!grant) {
          const grant = await fetchGrant(Number(params.id));
          setGrant(grant);
          const projects = await fetchProjectsUnderGrant(grant.id);
          setProjects(projects);
        } else {
          const projects = await fetchProjectsUnderGrant(grant.id);
          setProjects(projects);
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
  }, [grant, params.id, router, setGrant]);

  if (!grant) {
    toast({
      title: "Grant not found",
      description: "Please select a grant before proceeding to this page",
    });
    router.push("/");
    return null;
  }

  if (loading) {
    return <div className="">Loading...</div>;
  }

  // Format the funding period
  const fundingPeriod = formatDateRange(grant.start_fund, grant.end_fund);

  return (
    <main className="min-h-screen">
      <div className="pm pt-10">
        <div className="flex">
          <div className="flex flex-col mb-10">
            <div className="text-mainBlue text-6xl font-bold mb-2">
              {grant.organisation}
            </div>
            {/* <div className="text-7xl font-bold mb-10">{grant.organisation}</div> */}
            <div className="text-l mb-3">{grant.description}</div>
            <div className="text-textGrey text-l mb-8">
              Funding period: {fundingPeriod}
            </div>
            <div className="text-4xl font-bold">Matching Pool</div>
            <div className="text-4xl font-bold mb-5">
              {grant.matching_pool} TR3
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-2xl font-bold mb-5">Projects</div>
          <MainPageSlider type="project" projects={projects} />
        </div>
      </div>
    </main>
  );
}
