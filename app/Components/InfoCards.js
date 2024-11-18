import Image from "next/image";
import Link from "next/link";

export default function InfoCards({
    index,
    data
}) {
    return <Link href={"/pages" + data.page} className={"flex p-8 max-w-7xl flex-col transition shadow-lg rounded-2xl hover:shadow-slate-500/50" + (index%2 === 0 ? " bg-slate-800 md:flex-row" : " md:flex-row-reverse")}>
        <Image
            className={"object-cover m-auto" + (index%2 === 0 ? " md:mr-5" : " md:ml-5")}
            src={data.image}
            width={300}
            height={300}
            alt={data.title}
        />
        <div>
            <h2 className="text-2xl mb-2 mt-2 md:mt-0">{data.title}</h2>
            <p>{data.text}</p>
        </div>
    </Link>
}