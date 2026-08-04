import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import "../globals.css";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 h-dvh overflow-y-auto min-h-0">
        <header className="sticky bg-background border-b top-0 z-30 shrink-0 h-16 flex items-center px-4">
          <SidebarTrigger className="-ml-1" />
        </header>
        <div className="p-4">{children}</div>
      </main>
    </SidebarProvider>
  );
}
