export interface Project {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
  }
  
  export interface Fund {
    id: string;
    name: string;
    category: string;
    projects: Project[];
  }
  
  export interface CartItem {
    fundId: string;
    projectId: string;
    amount: number;
  }