// utils/mockData.ts
import { Fund, CartItem } from '../types/interfaces';
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



  export const mockFunds: Fund[] = [
    {
      id: "fund1",
      name: "Mestecc RnD Fund",
      category: "Synthetic Biology",
      projects: [
        {
          id: "project1",
          title: "Early Detection of Gestational Diabetes",
          description: "Early detection of gestational diabetes mellitus (GDM) is critical for managing risks to both the mother and the baby. GDM can lead to complications such as preeclampsia, increased risk of...",
          imageUrl: "/images/gestational-diabetes.jpg"
        },
        {
          id: "project2",
          title: "Bioengineered Insulin Production",
          description: "Developing more efficient methods for producing insulin using synthetic biology approaches to address the growing global demand for diabetes treatment.",
          imageUrl: "/images/insulin-production.jpg"
        }
      ]
    },
    {
      id: "fund2",
      name: "Green Energy Initiative",
      category: "Renewable Energy",
      projects: [
        {
          id: "project3",
          title: "Advanced Solar Cell Technology",
          description: "Research into new materials and designs for solar cells to significantly improve efficiency and reduce production costs.",
          imageUrl: "/images/solar-cells.jpg"
        },
        {
          id: "project4",
          title: "Algae-based Biofuel Production",
          description: "Developing scalable methods for producing biofuels from algae to create a sustainable alternative to fossil fuels.",
          imageUrl: "/images/algae-biofuel.jpg"
        }
      ]
    }
  ];
  
  export const mockCartItems: CartItem[] = [
    {
      fundId: "fund1",
      projectId: "project1",
      amount: 50
    },
    {
      fundId: "fund1",
      projectId: "project2",
      amount: 30
    },
    {
      fundId: "fund2",
      projectId: "project3",
      amount: 40
    }
  ];