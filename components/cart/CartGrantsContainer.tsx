import React from "react";
import FundItem from "./FundItem";
import { Project } from "@/utils/mockData";

interface CartGrantContainerProps {
  grantName: string;
  projects: Project[];
  grantTotal: number;
  onUpdateCart: (projectId: number, grantID: number) => void;
  onAmountChange: (grantID: number, projectId: number, amount: number) => void;
}

const CartGrantContainer: React.FC<CartGrantContainerProps> = ({
  grantName,
  projects,
  grantTotal,
  onUpdateCart,
  onAmountChange,
}) => {
  if (projects.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">{grantName}</h2>
      {projects.map((project) => (
        <FundItem
          key={project.id}
          project={project}
          onUpdateCart={onUpdateCart}
          onAmountChange={onAmountChange}
        />
      ))}
      <div className="text-right mt-2">
        Total: {grantTotal} TR3
      </div>
    </div>
  );
};

export default CartGrantContainer;
