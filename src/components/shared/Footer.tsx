import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-black text-white border-t border-zinc-800 px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
                <Image src={logo} alt="FitLog logo" />
                <span className="font-bold tracking-wider text-lg">FITLOG</span>
            </Link>

            <p className="text-zinc-500 text-sm">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </p>
        </footer>
    );
};

export default Footer;