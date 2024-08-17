import axios from "axios";

export interface Project {
  id: number;
  grant: number;
  project_name: string;
  description: string;
  start_time: string; // Adjust type if it's not a string
  end_time: string; // Adjust type if it's not a string
  current_fund: number;
  team_members: string[]; // Adjust type if needed, e.g., number for user ID
  total_contributors: number;
  remaining_days: number;
  created_by: string; // Adjust type if needed, e.g., number for user ID
  created_at: string; // Adjust type if it's not a string
  updated_at: string; // Adjust type if it's not a string
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
  // const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_all_grants`;
  // console.log('Fetching data from:' + url);

  try {
    // const response = await axios.get(url);
    // const data = response.data.data; // Adjust this based on your API response structure

    const grants: Grant[] = [
      {
        id: 1,
        organisation: "Mestecc RnD Fund",
        program_name: "Synthetic Biology",
        description:
          "The Synthetic Biology program seeks to empower researchers and innovators by providing them with the financial resources needed to explore groundbreaking ideas in synthetic biology. This program focuses on accelerating advancements in the design and construction of new biological parts, devices, and systems, as well as the re-engineering of existing biological systems for useful purposes.",
        start_fund: "2024-08-16T00:00:00Z",
        end_fund: "2024-09-16T00:00:00Z",
        matching_pool: "500000.00",
        remaining_days: 29,
      },
      {
        id: 2,
        organisation: "National Science Foundation",
        program_name: "Quantum Computing Initiative",
        description:
          "An initiative to advance research in quantum computing technologies, focusing on scalable quantum processors and quantum algorithms.",
        start_fund: "2024-09-01T00:00:00Z",
        end_fund: "2024-10-01T00:00:00Z",
        matching_pool: "1000000.00",
        remaining_days: 30,
      },
      {
        id: 3,
        organisation: "Global Health Research Fund",
        program_name: "Vaccine Development Program",
        description:
          "A global effort to accelerate vaccine research and development, focusing on next-generation vaccines for emerging infectious diseases.",
        start_fund: "2024-10-01T00:00:00Z",
        end_fund: "2024-11-01T00:00:00Z",
        matching_pool: "750000.00",
        remaining_days: 31,
      },
    ];
    // const grants: Grant[] = [
    //   {
    //     id: data.id,
    //     organisation: data.organisation,
    //     program_name: data.program_name,
    //     description: data.description,
    //     start_fund: data.start_fund,
    //     end_fund: data.end_fund,
    //     matching_pool: data.matching_pool,
    //     remaining_days: data.remaining_days
    //   },
    // ];
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
  // const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_grant/${id}`;
  // console.log('Fetching data from:' + url);

  try {
    // const response = await axios.get(url);
    // const data = response.data.data; // Adjust this based on your API response structure

    const grant: Grant = {
      id: 1,
      organisation: "Mestecc RnD Fund",
      program_name: "Synthetic Biology",
      description:
        "The Synthetic Biology program seeks to empower researchers and innovators by providing them with the financial resources needed to explore groundbreaking ideas in synthetic biology. This program focuses on accelerating advancements in the design and construction of new biological parts, devices, and systems, as well as the re-engineering of existing biological systems for useful purposes.",
      start_fund: "2024-08-16T00:00:00Z",
      end_fund: "2024-09-16T00:00:00Z",
      matching_pool: "500000.00",
      remaining_days: 29,
    };
    // const grants: Grant[] = [
    //   {
    //     id: data.id,
    //     organisation: data.organisation,
    //     program_name: data.program_name,
    //     description: data.description,
    //     start_fund: data.start_fund,
    //     end_fund: data.end_fund,
    //     matching_pool: data.matching_pool,
    //     remaining_days: data.remaining_days
    //   },
    // ];
    
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
  // const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_all_projects`;
  // console.log('Fetching data from:' + url);

  try {
    // const response = await axios.get(url);
    // const data = response.data.data; // Adjust this based on your API response structure

    // Ensure data is an array
    // if (!Array.isArray(data)) {
    //   throw new Error('API response data is not an array');
    // }

    // Transform the data into the Project interface format
    const projects: Project[] = [
      {
        id: 1,
        grant: 1,
        project_name: "Innovative AI Research",
        description:
          "A groundbreaking project focused on developing advanced AI models for natural language understanding.",
        start_time: "2024-09-01T00:00:00Z",
        end_time: "2025-09-01T00:00:00Z",
        current_fund: 0,
        total_contributors: 0,
        team_members: ["John Doe", "Jane Smith", "Emily Davis"],
        remaining_days: 379,
        created_by: "0x1234567890abcdef1234567890abcdef12345678",
        created_at: "2024-08-17T06:18:54.049Z",
        updated_at: "2024-08-17T06:18:54.049Z",
      },
      {
        id: 2,
        project_name: "Sustainable Energy Solutions",
        grant: 1,
        description:
          "This project aims to create affordable and sustainable energy solutions for rural communities by leveraging solar and wind technologies.",
        start_time: "2024-10-01T00:00:00Z",
        end_time: "2026-10-01T00:00:00Z",
        current_fund: 50000,
        total_contributors: 120,
        team_members: ["Alice Johnson", "Bob Brown", "Charlie White"],
        remaining_days: 730,
        created_by: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        created_at: "2024-08-18T09:45:23.123Z",
        updated_at: "2024-08-18T09:45:23.123Z",
      },
      {
        id: 3,
        project_name: "Healthcare Revolution",
        grant: 1,
        description:
          "A project dedicated to revolutionizing healthcare by integrating blockchain technology for secure and transparent medical records management.",
        start_time: "2025-01-01T00:00:00Z",
        end_time: "2026-01-01T00:00:00Z",
        current_fund: 75000,
        total_contributors: 200,
        team_members: ["David Wilson", "Eva Green", "Frank Miller"],
        remaining_days: 503,
        created_by: "0x0987654321fedcba0987654321fedcba09876543",
        created_at: "2024-08-19T14:32:47.987Z",
        updated_at: "2024-08-19T14:32:47.987Z",
      },
    ];
    // const projects: Project[] = data.map((item: any) => ({
    //   id: item.id,
    //   project_name: item.project_name,
    //   description: item.project_description,
    //   start_time: item.start_time,
    //   end_time: item.end_time,
    //   current_fund: parseFloat(item.current_fund), // Convert string to number if needed
    //   total_contributors: item.total_contributors,
    //   team_members: JSON.parse(item.team_members.replace(/'/g, '"')), // Convert JSON string to array
    //   remaining_days: item.remaining_days,
    //   created_by: item.created_by,
    //   created_at: item.created_at,
    //   updated_at: item.updated_at,
    // }));

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
  // const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_project/${id}`;
  // console.log('Fetching data from:' + url);

  try {
    // const response = await axios.get(url);
    // const data = response.data.data; // Adjust this based on your API response structure

    // Ensure data is an array
    // if (!Array.isArray(data)) {
    //   throw new Error('API response data is not an array');
    // }

    // Transform the data into the Project interface format
    const project: Project = {
      id: 1,
      grant: 1,
      project_name: "Innovative AI Research",
      description:
        "A groundbreaking project focused on developing advanced AI models for natural language understanding.",
      start_time: "2024-09-01T00:00:00Z",
      end_time: "2025-09-01T00:00:00Z",
      current_fund: 0,
      total_contributors: 0,
      team_members: ["John Doe", "Jane Smith", "Emily Davis"],
      remaining_days: 379,
      created_by: "0x1234567890abcdef1234567890abcdef12345678",
      created_at: "2024-08-17T06:18:54.049Z",
      updated_at: "2024-08-17T06:18:54.049Z",
    };
    // const project: Project[] = data.map((item: any) => ({
    //   id: item.id,
    //   project_name: item.project_name,
    //   description: item.project_description,
    //   start_time: item.start_time,
    //   end_time: item.end_time,
    //   current_fund: parseFloat(item.current_fund), // Convert string to number if needed
    //   total_contributors: item.total_contributors,
    //   team_members: JSON.parse(item.team_members.replace(/'/g, '"')), // Convert JSON string to array
    //   remaining_days: item.remaining_days,
    //   created_by: item.created_by,
    //   created_at: item.created_at,
    //   updated_at: item.updated_at,
    // }));

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
  // const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_projects/${id}`;
  // console.log('Fetching data from:' + url);

  try {
    // const response = await axios.get(url);
    // const data = response.data.data; // Adjust this based on your API response structure

    // Ensure data is an array
    // if (!Array.isArray(data)) {
    //   throw new Error('API response data is not an array');
    // }

    // Transform the data into the Project interface format
    const projects: Project[] = [
      {
        id: 1,
        grant: 1,
        project_name: "Innovative AI Research",
        description:
          "A groundbreaking project focused on developing advanced AI models for natural language understanding.",
        start_time: "2024-09-01T00:00:00Z",
        end_time: "2025-09-01T00:00:00Z",
        current_fund: 0,
        total_contributors: 0,
        team_members: ["John Doe", "Jane Smith", "Emily Davis"],
        remaining_days: 379,
        created_by: "0x1234567890abcdef1234567890abcdef12345678",
        created_at: "2024-08-17T06:18:54.049Z",
        updated_at: "2024-08-17T06:18:54.049Z",
      },
      {
        id: 2,
        project_name: "Sustainable Energy Solutions",
        grant: 2,
        description:
          "This project aims to create affordable and sustainable energy solutions for rural communities by leveraging solar and wind technologies.",
        start_time: "2024-10-01T00:00:00Z",
        end_time: "2026-10-01T00:00:00Z",
        current_fund: 50000,
        total_contributors: 120,
        team_members: ["Alice Johnson", "Bob Brown", "Charlie White"],
        remaining_days: 730,
        created_by: "0xabcdefabcdefabcdefabcdefabcdefabcdefabcdef",
        created_at: "2024-08-18T09:45:23.123Z",
        updated_at: "2024-08-18T09:45:23.123Z",
      },
      {
        id: 3,
        project_name: "Healthcare Revolution",
        grant: 1,
        description:
          "A project dedicated to revolutionizing healthcare by integrating blockchain technology for secure and transparent medical records management.",
        start_time: "2025-01-01T00:00:00Z",
        end_time: "2026-01-01T00:00:00Z",
        current_fund: 75000,
        total_contributors: 200,
        team_members: ["David Wilson", "Eva Green", "Frank Miller"],
        remaining_days: 503,
        created_by: "0x0987654321fedcba0987654321fedcba09876543",
        created_at: "2024-08-19T14:32:47.987Z",
        updated_at: "2024-08-19T14:32:47.987Z",
      },
    ];
    // const project: Project[] = data.map((item: any) => ({
    //   id: item.id,
    //   project_name: item.project_name,
    //   description: item.project_description,
    //   start_time: item.start_time,
    //   end_time: item.end_time,
    //   current_fund: parseFloat(item.current_fund), // Convert string to number if needed
    //   total_contributors: item.total_contributors,
    //   team_members: JSON.parse(item.team_members.replace(/'/g, '"')), // Convert JSON string to array
    //   remaining_days: item.remaining_days,
    //   created_by: item.created_by,
    //   created_at: item.created_at,
    //   updated_at: item.updated_at,
    // }));

    // Filter projects based on the grant ID
    const filteredProjects = projects.filter((project) => project.grant === id);

    return filteredProjects;
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
