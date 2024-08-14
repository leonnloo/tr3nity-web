import ProposalCard from "@/components/proposal-card";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-black w-full h-64 mb-5">
        <div className="text-white text-4xl flex-center h-full">69</div>
      </div>
      <div className="pm ">
        <div className="h-32 bg-blue-200 flex-center">
          Use pm in tailwind for page x margin
        </div>
        <ProposalCard />
        <ProposalCard showDetails={true} />
      </div>
    </main>
  );
}
