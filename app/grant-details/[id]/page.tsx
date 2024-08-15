import ProposalCard from "@/components/proposal-card";

export default function GrantDetails({ params }: { params: { id: string } }) {
    // Assuming you have an array of project data
    const projects = [
        { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
        { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 }
    ];
    console.log("GrantDetails page rendered with id:", params.id);
    return (
        <main className="min-h-screen">
            <div className="pm pt-10">
                <div className="flex">
                    <div className="flex flex-col mb-10">
                        <div className="text-mainBlue text-6xl font-bold mb-2">Mestecc RnD Fund</div>
                        <div className="text-7xl font-bold mb-10">Synthetic Biology</div>
                        <div className="text-xl mb-3">The MESTECC Research & Development Fund (MESTECC R&D Fund) is the government’s initiatives which is open to businesses and researchers interested in obtaining fund to carry out projects for economic growth and societal benefit.</div>
                        <div className="text-textGrey text-xl mb-8">Funding period: 2024/08/0706:00 +08-2024/08/2106:00 +08</div>
                        <div className="text-4xl font-bold">Matching Pool</div>
                        <div className="text-4xl font-bold mb-5">150,000 TR3</div>
                    </div>
                </div>
                <div className="text-2xl font-bold mb-5">Projects</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) =>(
                        <div key={project.id} className="w-full">
                            <ProposalCard />
                        </div>
                    ))}
                </div>

            </div>

        </main>
    )
}