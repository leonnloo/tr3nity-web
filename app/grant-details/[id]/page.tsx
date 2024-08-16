

import ProposalCard from "@/components/proposal-card";
import { fetchGrants } from "@/utils/mockData";
import Link from 'next/link';
import { notFound } from "next/navigation";

export default async function GrantDetails({ params }: { params: { id: string } }) {
    // Fetch grants data
    const grants = await fetchGrants();
    // Find the grant with the matching id
    const grant = grants.find(g => g.id === parseInt(params.id));
    console.log("GrantDetails page rendered with id:", params.id);

    if (!grant) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <div className="pm pt-10">
                <div className="flex">
                    <div className="flex flex-col mb-10">
                        <div className="text-mainBlue text-6xl font-bold mb-2">{grant?.title}</div>
                        <div className="text-7xl font-bold mb-10">Synthetic Biology</div>
                        <div className="text-xl mb-3">{grant?.description}</div>
                        <div className="text-textGrey text-xl mb-8">Funding period: 2024/08/0706:00 +08-2024/08/2106:00 +08</div>
                        <div className="text-4xl font-bold">Matching Pool</div>
                        <div className="text-4xl font-bold mb-5">150,000 TR3</div>
                    </div>
                </div>
                <div className="text-2xl font-bold mb-5">Projects</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {grant?.projects.map((project) => (
                        <Link key={project.id} href={`/project-details/${project.id}`}
                            passHref
                            legacyBehavior>
                            <ProposalCard showDetails={true} />
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}