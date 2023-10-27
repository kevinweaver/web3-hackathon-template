import { Hero, Prizes, Mint } from "../components";

function Page() {
  return (
    <div className="page flex flex-col min-h-page">
      <Hero />
      <Mint />
      <div className="flex-1">&nbsp;</div>
      <Prizes />
    </div>
  );
}

export default Page;
