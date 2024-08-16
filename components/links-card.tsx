import React from "react";
import { FiEdit } from "react-icons/fi"; // Assuming you're using react-icons

const LinksComponent = ({ links }: { links: string[] }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 py-10">
      <h3 className="text-xl font-bold">Links</h3>
      <div className="mt-4">
        {links.map((link, index) => (
          <div key={index} className="flex items-center space-x-2">
            <a href={link} className="text-blue-500 underline">
              {link}
            </a>
            <FiEdit className="text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinksComponent;
