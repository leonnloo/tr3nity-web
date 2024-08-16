import React from "react";
import { Clock } from "lucide-react"; // Assuming you're using Lucide for icons, you can use any other icon library

const DaysLeft = () => {
  return (
    <span className="inline-flex items-center text-mainBlue text-sm font-semibold">
      <Clock className="w-4 h-4 mr-1 text-mainBlue" />
      16 days left
    </span>
  );
};

export default DaysLeft;
