import UserSidebar from "@/components/user/user-sidebar";

export default function UserDashLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container px-5 py-5 mx-auto gap-5 flex overflow-hidden">
            <UserSidebar />
            <div className="relative flex flex-col flex-1 overflow-x-hidden h-full">
                {children}
            </div>
        </div>
    );
}
