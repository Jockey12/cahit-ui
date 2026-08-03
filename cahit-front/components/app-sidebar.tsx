// components/app-sidebar.tsx

"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Home, Settings, User, Calendar } from "lucide-react";
import Image from "next/image";
const navItems = [
  { title: "Dashboard", icon: Home, href: "/dashboard" },
  { title: "Calendar", icon: Calendar, href: "/calendar" },
  { title: "Models", icon: User, href: "/models" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        Cahit
        <div className="flex items-center gap-2 font-semibold text-lg">
          <span>Logo</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton render={<a href={item.href} />}>
                    <item.icon />
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border p-4">
        Info
        <button className="w-full flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Icon"
              width={10}
              height={10}
              priority
            />
          </div>
          <span>User</span>
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
