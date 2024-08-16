// utils/mockData.ts

interface Project {
    id: number;
    title: string;
    description: string;
    grantId: number;
  }
  
  interface Grant {
    id: number;
    title: string;
    description: string;
    projects: Project[];
  }
  
  export async function fetchGrants(): Promise<Grant[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
  
    const grants: Grant[] = [
      {
        id: 1,
        title: "AI Research Grant",
        description: "Supporting innovative AI projects to advance the field of artificial intelligence.",
        projects: [
          { id: 1, title: "Machine Learning Algorithms", description: "Developing advanced ML algorithms for complex data analysis.", grantId: 1 },
          { id: 2, title: "Natural Language Processing", description: "Improving NLP techniques for better human-computer interaction.", grantId: 1 },
          { id: 3, title: "Computer Vision", description: "Enhancing image recognition systems for autonomous vehicles.", grantId: 1 },
        ]
      },
      {
        id: 2,
        title: "Blockchain Innovation Grant",
        description: "Advancing blockchain technology for secure and transparent transactions.",
        projects: [
          { id: 4, title: "Smart Contracts", description: "Creating efficient smart contract systems for automated agreements.", grantId: 2 },
          { id: 5, title: "Decentralized Finance", description: "Exploring DeFi applications to revolutionize financial services.", grantId: 2 },
          { id: 6, title: "Blockchain Scalability", description: "Improving blockchain transaction speeds for wider adoption.", grantId: 2 },
        ]
      },
      {
        id: 3,
        title: "Green Energy Grant",
        description: "Supporting sustainable energy research to combat climate change.",
        projects: [
          { id: 7, title: "Solar Panel Efficiency", description: "Enhancing solar energy capture for improved sustainability.", grantId: 3 },
          { id: 8, title: "Wind Turbine Design", description: "Optimizing wind energy systems for higher energy output.", grantId: 3 },
          { id: 9, title: "Energy Storage Solutions", description: "Developing advanced battery technologies for renewable energy storage.", grantId: 3 },
        ]
      }
    ];
  
    return grants;
  }
  
  export async function fetchProjects(): Promise<Project[]> {
    const grants = await fetchGrants();
    return grants.flatMap(grant => grant.projects);
  }