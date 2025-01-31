import { useSession } from "@/provider/session-provider";
import {
    LogOut,
    LucideLayoutDashboard,
    LucideSettings,
    LucideUserRound,
} from "lucide-react";
import Link from "next/link";
import { FC } from "react";

interface AvatarDropdownProps {
    handleLogout: () => void;
    setIsDropdownOpen: (val: boolean) => void;
}

const AvatarDropdown: FC<AvatarDropdownProps> = ({
    handleLogout,
    setIsDropdownOpen,
}) => {
    const { session } = useSession();
    console.log(session);
    
    return (
        <div
            className="absolute z-50 w-screen max-w-[180px] px-4 mt-3.5 -right-10 sm:-right-4 sm:px-0 opacity-100 translate-y-0"
            tabIndex={-1}
        >
            <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid grid-cols-1 gap-6 bg-white dark:bg-slate-900 py-7 px-6">
                    {session?.role === "ADMIN" ? (
                        <Link
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-50"
                            href={"/admin"}
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <div className="flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-300">
                                <LucideLayoutDashboard size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium ">Admin</p>
                            </div>
                        </Link>
                    ) : null}
                    {session?.role === "TEACHER" ? (
                        <Link
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-50"
                            href={"/skills"}
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <div className="flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-300">
                                <LucideLayoutDashboard size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium ">
                                    Manage Skills
                                </p>
                            </div>
                        </Link>
                    ) : null}
                    {session?.role === "LEARNER" ? (
                        <Link
                            className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-50"
                            href={"/dashboard"}
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <div className="flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-300">
                                <LucideLayoutDashboard size={20} />
                            </div>
                            <div className="ml-4">
                                <p className="text-sm font-medium ">
                                    Dashboard
                                </p>
                            </div>
                        </Link>
                    ) : null}
                    <Link
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-50"
                        href={"/profile"}
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <div className="flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-300">
                            <LucideUserRound size={20} />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium ">Profile</p>
                        </div>
                    </Link>
                    <Link
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-50"
                        href={"/settings"}
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <div className="flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-300">
                            <LucideSettings size={20} />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium ">Settings</p>
                        </div>
                    </Link>
                    <div className="w-full border-b border-slate-200 dark:border-slate-700" />
                    <div
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-50"
                        onClick={() => {
                            setIsDropdownOpen(false);
                            handleLogout();
                        }}
                    >
                        <div className="flex items-center justify-center flex-shrink-0 text-slate-500 dark:text-slate-300">
                            <LogOut size={20} />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium ">Log out</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvatarDropdown;
