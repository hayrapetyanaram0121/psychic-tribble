import InfoCards from "./Components/InfoCards";
import data from "../data"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mt-21 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl h-full m-auto">
        <h1 className="text-5xl mx-auto">The main page of the test page</h1>
        <h3 className="text-slate-600 mx-auto">(Some subtitle here and some content with image and description below)</h3>
        <h3 className="text-slate-400 text-1xl mx-auto">Click cards below to navigate to the page</h3>
        {data.map((d, i) => {
          return <InfoCards key={d.id} index={i} data={d} />
        })}
      </main>
    </div>
  );
}
