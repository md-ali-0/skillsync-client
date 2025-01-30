import logo from "@/assets/images/logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, FC, SetStateAction } from "react";
import SideBarMenuItem from "./sidebar-menu-item";
import SidebarSubMenu from "./sidebar-submenu";

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <>
            <div
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
                    sidebarOpen ? "block" : "hidden"
                }`}
            ></div>
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 flex flex-col bg-gray-900 border-r border-gray-800 min-h-screen transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${
                    sidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <div className="flex items-center justify-center border-b border-gray-800 py-3 h-16">
                    <Link href="/" className="text-white">
                        <Image
                            src={logo.src}
                            alt=""
                            width={112}
                            height={50}
                            className="w-28"
                        />
                    </Link>
                </div>
                <div className="overflow-y-auto custom-scroll">
                    <nav className="mt-5 px-3">
                        <ul>
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Main
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Dashboard",
                                    icon: "LayoutGrid",
                                    path: "/admin",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Billing
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Packages",
                                    icon: "Package",
                                    path: "/admin/packages",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <SideBarMenuItem
                                menu={{
                                    name: "Orders",
                                    icon: "BadgeDollarSign",
                                    path: "/admin/orders",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Support
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Ticket",
                                    icon: "Tag",
                                    path: "/admin/ticket",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <SideBarMenuItem
                                menu={{
                                    name: "Live Chat",
                                    icon: "MessageCircle",
                                    path: "/admin/#",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <h4 className="text-gray-400 font-semibold text-xs mb-1">
                                Account
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Profile",
                                    icon: "User2",
                                    path: "/admin/usage",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />

                            <h4 className="text-gray-400 font-semibold text-xs mt-2">
                                Settings
                            </h4>
                            <SideBarMenuItem
                                menu={{
                                    name: "Users",
                                    icon: "Users",
                                    path: "/admin/users",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />
                            <SidebarSubMenu
                                menu={{
                                    name: "Settings",
                                    icon: "Settings",
                                }}
                                subMenu={[
                                    {
                                        name: "Company",
                                        path: "/admin/company",
                                    },
                                    {
                                        name: "Delivary",
                                        path: "/admin/delivery",
                                    },
                                    {
                                        name: "Payment",
                                        path: "/admin/payment",
                                    },
                                    {
                                        name: "Mail",
                                        path: "/admin/mail",
                                    },
                                ]}
                                setSidebarOpen={setSidebarOpen}
                            ></SidebarSubMenu>
                            <SideBarMenuItem
                                menu={{
                                    name: "Back to Home",
                                    icon: "House",
                                    path: "/",
                                }}
                                setSidebarOpen={setSidebarOpen}
                            />
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
