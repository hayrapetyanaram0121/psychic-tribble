import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.svg";

export default function Footer() {
    return <footer className="bg-slate-800 min-h-40 p-8 sm:px-20">
        <div className="max-w-7xl h-full m-auto row-start-3 flex gap-6 flex-wrap items-center justify-center">
            <Link href="/">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="Logo"
                />
            </Link>
            <ul className="pl-5 list-disc mb-1">
                <li className="text-slate-400">Laniakea Supercluster, Milky Way, Solar System, Planet Earth</li>
                <li className="text-slate-400">Email: <a href="mailto:test@task.com">test@task.com</a></li>
                <li className="text-slate-400">Phone: +00000000</li>
                <li>
                    <Link href="/privacy-policy" className="items-center hover:text-slate-600">
                        <strong>Click here to go to privacy policy page</strong>
                    </Link>
                </li>
            </ul>
        </div>
    </footer>
}