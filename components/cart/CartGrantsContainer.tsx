import React from "react";
import FundItem from "./FundItem";
import { Project } from "@/utils/mockData";

// Define static project data
const staticProjects: Project[] = [
  {
    id: 2,
    grant: 1,
    project_name: 'Nanoparticle Drug Delivery Systems',
    description: 'This project aims to develop advanced nanoparticle-based drug delivery systems for targeted cancer therapy, improving efficacy and reducing side effects.',
    start_fund: '2024-10-01T00:00:00Z',
    end_fund: '2025-10-01T00:00:00Z',
    current_fund: 0,
    total_contributors: 0,
    team_members: [ 'Alice Johnson', 'Bob Brown', 'Charlie White' ],
    remaining_days: 408,
    created_by: '0x91A9fd571BE76C48Abfa189BC6b575054800ee0c',
    created_at: '2024-08-18T02:30:49.039Z',
    updated_at: '2024-08-18T02:30:49.039Z',
    aim: 'To create and optimize nanoparticle systems for targeted drug delivery to enhance cancer treatment outcomes.',
    timeline: 'Phase 1: Design (Months 1-6) - Design and synthesize nanoparticle prototypes.\n' +
      'Phase 2: Testing (Months 7-12) - Conduct preclinical tests and refine formulations.\n' +
      'Phase 3: Implementation (Months 13-18) - Finalize system and prepare for clinical trials.',
    status: 'active'
  },
  {
    id: 3,
    grant: 1,
    project_name: 'CRISPR Gene Therapy for Rare Diseases',
    description: 'A groundbreaking project focused on developing CRISPR-based gene therapies for rare genetic disorders, aiming to provide curative treatments for previously untreatable conditions.',
    start_fund: '2024-08-19T00:00:00Z',
    end_fund: '2024-08-31T00:00:00Z',
    current_fund: 0,
    total_contributors: 0,
    team_members: [ 'David Wilson', 'Eva Green', 'Frank Miller' ],
    remaining_days: 12,
    created_by: '0x91A9fd571BE76C48Abfa189BC6b575054800ee0c',
    created_at: '2024-08-18T03:34:43.201Z',
    updated_at: '2024-08-18T03:34:43.201Z',
    aim: 'To revolutionize the treatment of rare genetic disorders through innovative CRISPR technology, offering hope for curative therapies and improved quality of life for patients.',
    timeline: 'Phase 1: Research (Months 1-6) - Conduct initial research and literature review.\r\n' +
      'Phase 2: Development (Months 7-12) - Develop and test therapeutic approaches.\r\n' +
      'Phase 3: Testing (Months 13-18) - Conduct clinical trials and evaluate results.',
    status: 'active'
  },
];

// Static grant total
const staticGrantTotal = 10 ; // Example grant total

const CartGrantContainer: React.FC = () => {
  // Example handlers
  const handleUpdateCart = (projectId: number, grantID: number) => {
    console.log(`Update cart for projectId: ${projectId}, grantID: ${grantID}`);
  };

  const handleAmountChange = (grantID: number, projectId: number, amount: number) => {
    console.log(`Amount change for grantID: ${grantID}, projectId: ${projectId}, amount: ${amount}`);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Grant Name: Neurobiology</h2>
      {staticProjects.map((project) => (
        <FundItem
          key={project.id}
          project={project}
          onUpdateCart={handleUpdateCart}
          onAmountChange={handleAmountChange}
        />
      ))}
      <div className="text-right mt-2">
        Total: {staticGrantTotal} TR3
      </div>
    </div>
  );
};

export default CartGrantContainer;
