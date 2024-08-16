import React from "react";

const MembersComponent = ({
  members,
}: {
  members: { color: string; address: string }[];
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 py-10">
      <h3 className="text-xl font-bold">Members</h3>
      <div className="mt-4 space-y-2">
        {members.map((member, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: member.color }}
            />
            <p className="text-sm font-mono">{member.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembersComponent;
