import type { Metadata } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "CahitLLM",
  description: "front-end for local llms",
};

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={geistSans.className}>
        <SidebarProvider>
          <AppSidebar />
          <main className="flex-1 h-dvh overflow-y-auto min-h-0">
            <header className="sticky border-b h-auto bg-blend-color flex items-center px-4">
              <SidebarTrigger className="-ml-1" />
            </header>
            <div className="p-4">{children}</div>
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
