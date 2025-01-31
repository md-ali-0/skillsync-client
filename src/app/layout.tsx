import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

import { Toaster } from "@/components/ui/sonner";
import ReduxProvider from "@/provider/redux-provider";
import { SessionProvider } from "@/provider/session-provider";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "SkillSync - Collaborative Learning Platform",
    description: "Connect, teach, and learn with SkillSync",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <SessionProvider>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="light"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <ReduxProvider>
                            <Header />
                            <main>{children}</main>
                            <Footer />
                        </ReduxProvider>
                        <Toaster richColors={true} expand={false} />
                    </ThemeProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
