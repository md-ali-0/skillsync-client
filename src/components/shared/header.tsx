"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "Sale", href: "/sale" },
        { name: "Manage", href: "/manage" },
        { name: "Pricing", href: "/pricing" },
        { name: "Learn", href: "/learn" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="sticky top-0 left-0 w-full bg-white border-b py-4 px-4 sm:px-10 min-h-[70px] tracking-wide z-50">
            <div className="flex flex-wrap items-center gap-4 w-full container mx-auto">
                <Link href="/" className="max-sm:hidden">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        className="w-36"
                        width={145}
                        height={50}
                    />
                </Link>
                <Link href="/" className="hidden max-sm:block">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        className="w-20"
                        width={145}
                        height={50}
                    />
                </Link>
                <div
                    className={`lg:flex lg:flex-auto lg:ml-12 ${
                        isMenuOpen
                            ? "fixed inset-0 z-50 bg-black bg-opacity-50"
                            : "hidden"
                    }`}
                >
                    <div
                        className={`lg:flex lg:flex-auto ${
                            isMenuOpen
                                ? "fixed bg-white w-1/2 min-w-[300px] top-0 left-0 p-6 h-full shadow-md overflow-auto z-50"
                                : ""
                        }`}
                    >
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden absolute top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
                            <li className="mb-6 hidden max-lg:block">
                                <Link href="/">
                                    <Image
                                        src="/logo.png"
                                        alt="logo"
                                        className="w-36"
                                        width={145}
                                        height={50}
                                    />
                                </Link>
                            </li>
                            {navItems.slice(0, 4).map((item) => (
                                <li
                                    key={item.name}
                                    className="max-lg:border-b max-lg:py-3"
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-2 hover:text-primary ${
                                            pathname === item.href
                                                ? "text-primary font-bold"
                                                : "text-gray-600"
                                        } block text-[15px]`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <ul className="lg:flex lg:items-center ml-auto max-lg:block lg:space-x-8">
                            {navItems.slice(4).map((item) => (
                                <li
                                    key={item.name}
                                    className="max-lg:border-b max-lg:py-3 max-lg:mt-2"
                                >
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-2 hover:text-primary ${
                                            pathname === item.href
                                                ? "text-primary font-bold"
                                                : "text-gray-600"
                                        } block text-[15px]`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-l h-6 max-lg:hidden" />
                <div className="flex items-center ml-auto space-x-4">
                    <Button variant="outline" asChild className="hidden sm:block">
                        <Link href="/auth/signin">Log in</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/auth/signup">Start free trial</Link>
                    </Button>
                    <button onClick={toggleMenu} className="lg:hidden">
                        <Menu className="w-7 h-7" />
                    </button>
                </div>
            </div>
        </header>
    );
}
