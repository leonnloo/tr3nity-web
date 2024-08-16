import { statusConfig, StatusType } from "@/lib/utils";
import React from "react";

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      className={`inline-block px-5 py-1 text-sm font-semibold ${statusConfig[status].textColor} ${statusConfig[status].bgColor} rounded-full`}
    >
      {statusConfig[status].text}
    </span>
  );
};

export default StatusBadge;
