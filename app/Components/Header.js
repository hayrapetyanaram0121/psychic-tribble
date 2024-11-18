import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

export default function Header() {
    return <header className="h-20 px-8 sm:px-20 bg-slate-800 fixed w-screen top-0">
        <div className="max-w-7xl h-full m-auto flex items-center justify-between">
            <Link href="/">
                <Image
                    src={logo}
                    width={50}
                    height={50}
                    alt="Logo"
                />
            </Link>
            <Link href="/privacy-policy" className="items-center hover:text-slate-600">
                <strong>Privacy Policy</strong>
            </Link>
        </div>
    </header>
}