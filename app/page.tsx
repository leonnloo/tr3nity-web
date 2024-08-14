import ProposalCard from "@/components/proposal-card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProposalCard />
      <ProposalCard showDetails={true} />
    </main>
  );
}
