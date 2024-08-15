import ProposalCard from "@/components/proposal-card";
import { nunitoSans } from "./fonts";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="bg-mainBlue w-full h-96 mb-5 flex flex-col justify-center items-center ">
        <div className="text-white text-6xl text-center font-black mb-4">
          <h1 className={nunitoSans.className}>Collaborate Innovate Decentralize</h1>
        </div>
        <div className="text-white text-6xl text-center font-black">
          <h1 className={nunitoSans.className}>Malaysia's Science Future</h1>
        </div>
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
