import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const MembersComponent = ({ members }: { members: string[] }) => {
  // console.log("Members:", members);
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 py-10">
      <h3 className="text-xl font-bold">Members</h3>
      <div className="mt-4 space-y-2">
        {members.map((member, index) => (
          <div key={index} className="flex items-center space-x-2">
              <Avatar className="w-8 h-8 rounded-full">
                <AvatarImage
                  className="w-full h-full"
                  src={`https://github.com/shadcn.png`} // Replace with actual URL for each team member if available
                  alt={member}
                />
                <AvatarFallback>{member.charAt(0)}</AvatarFallback>
              </Avatar>
            <p className="text-sm font-mono">{member}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersComponent;
