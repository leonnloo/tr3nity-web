import React from "react";

interface FundsComponentProps {
  status: string;
  donations: number;
  funds: number;
}

const FundsComponent: React.FC<FundsComponentProps> = ({
  status,
  donations,
  funds,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 py-10">
      {status === "active" ? (
        <>
          <h3 className="text-xl font-bold">Funds raised so far</h3>
          <div className="mt-4">
            <p>
              Number of donations:{" "}
              <span className="font-semibold">{donations}</span>
            </p>
            <p>
              Tokens: <span className="font-semibold">{funds}</span>
            </p>
          </div>
        </>
      ) : status === "rejected" ? (
        <h3 className="text-xl font-bold text-red-600">No funds available</h3>
      ) : (
        <>
          <h3 className="text-xl font-bold">Funds raised</h3>
          <div className="mt-4">
            <p>
              Number of donations:{" "}
              <span className="font-semibold">{donations}</span>
            </p>
            <p>
              Tokens: <span className="font-semibold">{funds}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FundsComponent;
