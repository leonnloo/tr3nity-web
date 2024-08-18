import axios from "axios";

export interface Project {
  id: number;
  grant: number;
  project_name: string;
  description: string;
  start_fund: string; // Adjust type if it's not a string
  end_fund: string; // Adjust type if it's not a string
  current_fund: number;
  team_members: string[]; // Adjust type if needed, e.g., number for user ID
  total_contributors: number;
  remaining_days: number;
  created_by: string; // Adjust type if needed, e.g., number for user ID
  created_at: string; // Adjust type if it's not a string
  updated_at: string; // Adjust type if it's not a string
  aim: string;
  timeline: string;
  status: string;
}

export interface Grant {
  id: number;
  organisation: string;
  program_name: string;
  description: string;
  start_fund: string;
  end_fund: string;
  matching_pool: string;
  remaining_days: number;
}

export async function fetchGrants(): Promise<Grant[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // API URL
  const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_all_grants`;
  console.log('Fetching data from:' + url);

  try {
    const response = await axios.get(url);
    const data = response.data.data; // Adjust this based on your API response structure

    const grants: Grant[] = data.map((item: any) => ({
      id: item.id,
      organisation: item.organisation,
      program_name: item.program_name,
      description: item.description,
      start_fund: item.start_fund,
      end_fund: item.end_fund,
      matching_pool: item.matching_pool,
      remaining_days: item.remaining_days
    }));

    console.log('Grants:', grants);
    return grants; // Return the grant data directly
  } catch (error) {
    console.error("Error fetching grants:", error);
    throw new Error("Could not fetch grants");
  }
}

export async function fetchGrant(id: number): Promise<Grant> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // API URL
  const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_grant/${id}`;
  console.log('Fetching data from:' + url);

  try {
    const response = await axios.get(url);
    const data = response.data.data; // Adjust this based on your API response structure

    const grant: Grant = {
      id: data.id,
      organisation: data.organisation,
      program_name: data.program_name,
      description: data.description,
      start_fund: data.start_fund,
      end_fund: data.end_fund,
      matching_pool: data.matching_pool,
      remaining_days: data.remaining_days
    };

    

    return grant; // Return the grant data directly
  } catch (error) {
    console.error("Error fetching grants:", error);
    throw new Error("Could not fetch grants");
  }
}

// FETCH ALL PROJECTs
export async function fetchProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // API URL
  const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_all_projects`;
  console.log('Fetching data from:' + url);

  try {
    const response = await axios.get(url);
    const data = response.data.data; // Adjust this based on your API response structure

    // Ensure data is an array
    // if (!Array.isArray(data)) {
    //   throw new Error('API response data is not an array');
    // }

    const projects: Project[] = data.map((item: any) => ({
      id: item.id,
      grant :item.grant,
      project_name: item.project_name,
      description: item.project_description,
      start_fund: item.start_time,
      end_fund: item.end_time,
      current_fund: parseFloat(item.current_fund), // Convert string to number if needed
      total_contributors: item.total_contributors,
      team_members: JSON.parse(item.team_members.replace(/'/g, '"')), // Convert JSON string to array
      remaining_days: item.remaining_days,
      created_by: item.created_by,
      created_at: item.created_at,
      updated_at: item.updated_at,
      aim: item.aim,
      timeline: item.timeline,
      status: item.status,
    }));

    console.log('Projects:', projects);

    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Could not fetch projects");
  }
}

// FETCH ONE PROJECT WITH ITS ID
export async function fetchProject(id: number): Promise<Project> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // API URL
  const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_project_by_id/${id}`;
  console.log('Fetching data from:' + url);

  try {
    const response = await axios.get(url);
    const data = response.data.data; // Adjust this based on your API response structure

    // Ensure data is an array
    // if (!Array.isArray(data)) {
    //   throw new Error('API response data is not an array');
    // }

    const project: Project = {
      id: data.id,
      grant: data.grant, // Add the 'grant' property
      project_name: data.project_name,
      description: data.project_description,
      start_fund: data.start_time,
      end_fund: data.end_time,
      current_fund: parseFloat(data.current_fund), // Convert string to number if needed
      total_contributors: data.total_contributors,
      team_members: JSON.parse(data.team_members.replace(/'/g, '"')), // Convert JSON string to array
      remaining_days: data.remaining_days,
      created_by: data.created_by,
      created_at: data.created_at,
      updated_at: data.updated_at,
      aim: data.aim,
      timeline: data.timeline,
      status: data.status,
    };


    return project;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Could not fetch projects");
  }
}

// FETCH ONE PROJECT UNDER A GRANT
export async function fetchProjectsUnderGrant(id: number): Promise<Project[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // API URL
  const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_projects/${id}`;
  console.log('Fetching data from:' + url);

  try {
    const response = await axios.get(url);
    const data = response.data.data; // Adjust this based on your API response structure
    console.log('Data:', data);
    // Ensure data is an array
    // if (!Array.isArray(data)) {
    //   throw new Error('API response data is not an array');
    // }

    const projects: Project[] = data.map((item: any) => ({
      id: item.id,
      grant: item.grant, // Add the 'grant' property
      project_name: item.project_name,
      description: item.project_description,
      start_fund: item.start_time,
      end_fund: item.end_time,
      current_fund: parseFloat(item.current_fund), // Convert string to number if needed
      total_contributors: item.total_contributors,
      team_members: JSON.parse(item.team_members.replace(/'/g, '"')), // Convert JSON string to array
      remaining_days: item.remaining_days,
      created_by: item.created_by,
      created_at: item.created_at,
      updated_at: item.updated_at,
      aim: item.aim,
      timeline: item.timeline,
      status: item.status,
    }));

    // console.log('Projects:', projects);
    return projects;

  } catch (error) {
    console.error("Error fetching projects:", error);
    throw new Error("Could not fetch projects");
  }
}

interface NewProposal {
  grant: string;
  title: string;
  background: string;
  aim: string;
  timeline: string;
  start_time: Date | undefined;
  end_time: Date | undefined;
  team_members: string;
  files: FileList | null;
}

export const insertNewProposal = async (proposal: NewProposal) => {
  try {
    const formData = new FormData();

    formData.append("grant", proposal.grant);
    formData.append("title", proposal.title);
    formData.append("background", proposal.background);
    formData.append("aim", proposal.aim);
    formData.append("timeline", proposal.timeline);
    formData.append("start_time", proposal.start_time?.toISOString() || "");
    formData.append("end_time", proposal.end_time?.toISOString() || "");
    formData.append("team_members", proposal.team_members);

    if (proposal.files) {
      Array.from(proposal.files).forEach((file) => {
        formData.append("files", file);
      });
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/new_proposal`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to submit the proposal");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error submitting proposal:", error);
    throw error;
  }
};
