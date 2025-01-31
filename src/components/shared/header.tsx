"use client";

import { Button } from "@/components/ui/button";
import config from "@/config";
import { useSession } from "@/provider/session-provider";
import { useGetMeQuery } from "@/redux/features/user/userApi";
import { signout } from "@/service/auth";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import AvatarDropdown from "./avater-dropdown";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const handleDropdownToggle = () => setIsDropdownOpen(!isDropdownOpen);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const { session, setIsLoading } = useSession();
    const { data: user, isLoading } = useGetMeQuery(undefined);

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            localStorage.removeItem("token");
            await signout();
            setIsLoading(false);
            toast.success("Logout Successfully");
            router.push("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };

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
        <>
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
                        {session?.isAuth ? (
                            <div className="relative">
                                <div
                                    onClick={handleDropdownToggle}
                                    className="cursor-pointer"
                                >
                                    <div className="group flex gap-2">
                                        {isLoading ? (
                                            <div className="flex items-center space-x-4">
                                                <Skeleton className="size-10 rounded-full" />
                                                <div className="hidden sm:block space-y-2">
                                                    <Skeleton className="h-4 w-[120px]" />
                                                    <Skeleton className="h-4 w-[80px]" />
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                                <Avatar>
                                                    <AvatarImage
                                                        src={`${config.host}/${user?.avatar}`}
                                                        alt={user?.name}
                                                        className="object-cover rounded-full size-10  border border-primary p-1"
                                                    />
                                                    <AvatarFallback>
                                                        {
                                                            user?.name.split(
                                                                ""
                                                            )[0]
                                                        }
                                                    </AvatarFallback>
                                                </Avatar>
                                                <div className="hidden sm:block">
                                                    <h3 className="font-medium capitalize">
                                                        {user?.name}
                                                    </h3>
                                                    <span className="block -mt-1 text-sm text-gray-400 capitalize">
                                                        {session?.role}
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>

                                {isDropdownOpen && (
                                    <AvatarDropdown
                                        handleLogout={handleLogout}
                                        setIsDropdownOpen={setIsDropdownOpen}
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="flex gap-2.5">
                                <Button
                                    variant="outline"
                                    asChild
                                    className="hidden sm:block"
                                >
                                    <Link href="/auth/signin">Log in</Link>
                                </Button>
                                <Button asChild>
                                    <Link href="/auth/signup">
                                        Start free trial
                                    </Link>
                                </Button>
                            </div>
                        )}
                        <button onClick={toggleMenu} className="lg:hidden">
                            <Menu className="w-7 h-7" />
                        </button>
                    </div>
                </div>
            </header>
            <div
                onClick={() => setIsDropdownOpen(false)}
                className={`fixed inset-0 z-10 w-full h-full ${
                    isDropdownOpen ? "" : "hidden"
                }`}
            ></div>
        </>
    );
}
