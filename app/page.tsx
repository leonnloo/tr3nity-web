import ProposalCard from "@/components/proposal-card";
import MainPageSlider from "@/components/slider/main-page-slider";
import { nunitoSans } from "./fonts";
import { fetchGrants,fetchProjects } from "@/utils/mockData";


export default async function Home() {
  const [projects, grants] = await Promise.all([fetchProjects(), fetchGrants()]);
  console.log("Home page rendered with projects:", projects, "and grants:", grants)


  return (
    <main className="min-h-screen">
      <div className="bg-mainBlue w-full h-96 mb-10 flex flex-col justify-center items-center ">
        <div className="text-white text-6xl text-center font-black mb-4">
          <h1 className={nunitoSans.className}>Collaborate Innovate Decentralize</h1>
        </div>
        <div className="text-white text-6xl text-center font-black">
          <h1 className={nunitoSans.className}>Malaysia's Science Future</h1>
        </div>
      </div>
      <div className="pm">
        {/* <div className="h-32 bg-blue-200 flex-center">
          Use pm in tailwind for page x margin
        </div> */}
        <div className="text-2xl font-bold mb-5">Grants</div>
        <div className="mb-5">
          <MainPageSlider items={grants} type="grant" />
        </div>
        <div className="text-2xl font-bold mb-5">Projects</div>
        <MainPageSlider items={projects} type="project" />
        {/* <ProposalCard showDetails={true} /> */}
      </div>
    </main>
  );
}
