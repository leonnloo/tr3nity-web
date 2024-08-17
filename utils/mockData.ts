// utils/mockData.ts
import axios from 'axios';

export interface Project {
  id: number;
  project_name: string;
  description: string;
  start_time: string; // Adjust type if it's not a string
  end_time: string; // Adjust type if it's not a string
  current_fund: number;
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
  matching_pool: number;
  remaining_days: number;
}

export async function fetchGrants(): Promise<Grant[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // API URL
  // const url = `${process.env.NEXT_PUBLIC_DJANGO_URL}tr3nity_grants/get_all_grants`;
  // console.log('Fetching data from:' + url);

  try {
    // const response = await axios.get(url);
    // const data = response.data.data; // Adjust this based on your API response structure

    const grants: Grant[] = []
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
    console.error('Error fetching grants:', error);
    throw new Error('Could not fetch grants');
  }
}

export async function fetchProjects(): Promise<Project[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

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
    const projects: Project[] = []
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
    console.error('Error fetching projects:', error);
    throw new Error('Could not fetch projects');
  }
}
