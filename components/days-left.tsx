import React from "react";
import { Clock } from "lucide-react"; // Assuming you're using Lucide for icons, you can use any other icon library

const DaysLeft = ({remainingDays}: {remainingDays: number}) => {
  return (
    <span className="inline-flex items-center text-mainBlue text-sm font-semibold">
      <Clock className="w-4 h-4 mr-1 text-mainBlue" />
      {remainingDays} days
    </span>
  );
};

export default DaysLeft;
