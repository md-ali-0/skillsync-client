"use client";

import DashNavbar from "@/components/dash/navbar";
import Sidebar from "@/components/dash/sidebar";
import React, { useCallback, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = useCallback(() => {
        setSidebarOpen((prev) => !prev);
    }, []);

    return (
        <div className="flex h-screen">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={toggleSidebar} />
            <div className="flex-1 flex flex-col">
                <DashNavbar
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={toggleSidebar}
                />
                <main className="flex-1 overflow-y-auto bg-slate-100 dark:bg-background custom-scroll">
                    <div className="container mx-auto px-5 py-5">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
