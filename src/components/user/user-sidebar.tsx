"use client";

import { useSession } from "@/provider/session-provider";
import { signout } from "@/service/auth";
import {
    FileText,
    LayoutDashboard,
    LogOut,
    Settings
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";

const sidebarLinks = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: FileText, label: "Skills", href: "/skills" },
    { icon: Settings, label: "My Profile", href: "/profile" },
];

export default function UserSidebar() {
    const path = usePathname();

    const { setIsLoading } = useSession();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            setIsLoading(true);
            localStorage.removeItem("token");
            await signout();
            setIsLoading(false);
            router.replace("/auth/signin");
            toast.success("Logout Successfully");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return (
        <aside className="w-64 bg-white border rounded-xl p-4 hidden md:block h-fit">
            <nav className="space-y-2">
                {sidebarLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href || "#"}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-lg ${
                            path === link.href
                                ? "bg-primary text-white"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <link.icon className="h-4 w-4" />
                        {link.label}
                    </Link>
                ))}
                <button className="flex items-center gap-3 px-3 py-2 rounded-lg text-lg text-gray-700 hover:bg-gray-100 w-full" onClick={handleLogout}>
                    <LogOut className="h-4 w-4" /> LogOut
                </button>
            </nav>
        </aside>
    );
}
