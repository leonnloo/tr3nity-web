import React from "react";
import { FiDownload } from "react-icons/fi";

interface WithdrawalComponentProps {
  status: string;
  withdrawel: number;
  withdrawalDate: string;
}

const WithdrawalComponent: React.FC<WithdrawalComponentProps> = ({
  status,
  withdrawel,
  withdrawalDate,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 flex items-center py-10">
      <div className="bg-green-200 p-4 rounded-full mr-4">
        <FiDownload className="text-green-800" size={24} />
      </div>
      <div>
        <h4 className="text-xl font-semibold">Withdrawal</h4>
        {status === "executed" ? (
          <>
            <p className="text-gray-500">{withdrawel} TR3</p>
            <p className="text-sm text-gray-400">{withdrawalDate}</p>
          </>
        ) : (
          <p className="text-gray-500">Withdrawal not available</p>
        )}
      </div>
    </div>
  );
};

export default WithdrawalComponent;
