import Image from "next/image";
import data from "../../../../data"

export default async function Page({
    params
}) {
    const { name } = await params;

    const one = data.find(d => d.name === name);

    return <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen mt-21 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl h-full m-auto">
            <h2 className="text-5xl m-auto mb-2">{one.title}</h2>
            <Image
                className="object-cover m-auto border border-slate-400"
                src={one.image}
                width={500}
                height={500}
                alt={one.title}
            />
            {one.topic.map((t, i) => <Topic
                key={i + Math.random()}
                title={t.title}
                content={t.text}
            />)}
        </main>
    </div>
}

const Topic = ({ title, content }) => (
    <section>
      <h2 className="text-3xl mb-2">{title}</h2>
      <p>{content}</p>
    </section>
  );

export async function generateMetadata({
    params
}) {
    const { name } = await params;

    const one = data.find(d => d.name === name);

    return {
        title: one.title,
        description: one.text,
    }
}