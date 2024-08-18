import axios from "axios";
import { StaticImageData } from "next/image";
import sample1 from "@/public/sample-1.png";
import sample2 from "@/public/sample-2.png";
import sample3 from "@/public/sample-3.png";

// Map API image keys or URLs to static imports
const imageMap: Record<string, StaticImageData> = {
  "sample-1": sample1,
  "sample-2": sample2,
  "sample-3": sample3,
};

export type Project = {
  id: number;
  title: string;
  status: "active" | "executed" | "rejected";
  image: StaticImageData;
  duration: string;
  background: string;
  aim: string;
  timeline: string;
  funds: number;
  donations: number;
  pdf_uploaded:number;
  withdrawel: number;
  links: string;
  startDate?: string;
  endDate?: string;
  remaingDays?: number;
  members: string[];
  uploaded_by: string;
  grant: string;
};

export async function fetchProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // API URL
  const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_all_projects`;
  console.log('Fetching data from:' + url);

  try {
    const response = await axios.get(url);
    const data = response.data.data; // Adjust this based on your API response structure

    const projects: Project[] = await Promise.all(data.map(async (item: any) => {
      // Fetch PDF links
      const pdfUrl = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_certificate/api_get_pdf/${item.created_by}/${item.pdf}`;
      const pdfResponse = await axios.get(pdfUrl);
      const pdfLink = pdfResponse.data;

      console.log('PDF Link:', pdfLink.data);

      // Map image URL or identifier to StaticImageData
      const imageKey = item.image?.split('/').pop()?.split('.').shift(); // Extract image key
      const image = imageMap[imageKey || 'default'] || sample1; // Fallback image

      return {
        id: item.id,
        grant: item.grant,
        title: item.project_name,
        status: item.status,
        image: image,
        duration: item.remaining_days ? `${item.remaining_days} days left` : 'Unknown',
        background: item.project_description,
        aim: item.aim,
        timeline: item.timeline,
        funds: parseFloat(item.current_fund), // Ensure correct number conversion
        donations: parseFloat(item.total_contributors),
        withdrawel: parseFloat(item.withdrawel) || 50000, // Default to 0 if undefined
        links: pdfLink.data, // Use fetched PDF link
        startDate: item.start_fund,
        endDate: item.end_fund,
        remaingDays: item.remaining_days,
        members: JSON.parse(item.team_members.replace(/'/g, '"')),
        uploaded_by: item.created_by,
      };
    }));

    // console.log('Projects:', projects);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Could not fetch projects");
  }
}
