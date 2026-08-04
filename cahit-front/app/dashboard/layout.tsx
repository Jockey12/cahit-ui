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
      <main className="flex-1">
        <header className="border-b h-16 flex items-center px-4">
          <SidebarTrigger className="-ml-1 flex" />
        </header>
        <div className="p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
