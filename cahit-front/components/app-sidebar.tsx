// components/app-sidebar.tsx

"use client";
import { motion } from "motion/react";
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
import React, { useEffect, useState } from "react";
import Image from "next/image";
const navItems = [
  { title: "Dashboard", icon: Home, href: "/dashboard" },
  { title: "Calendar", icon: Calendar, href: "/calendar" },
  { title: "Models", icon: User, href: "/models" },
  { title: "Settings", icon: Settings, href: "/settings" },
];

export function AppSidebar() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldDark = stored ? stored === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldDark);
    // setIsDark(shouldDark);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-border p-4">
        <div className="flex items-center gap-2 font-semibold text-lg">
          CahitLLM
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
        <motion.button
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 1.0 }}
          onClick={toggleTheme}
          className="w-full flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
            <Image
              className="dark:invert"
              src="/ThemeSelector.svg"
              alt="Change theme"
              width={22}
              height={22}
              priority
            />
          </div>
          <span>Theme</span>
        </motion.button>
      </SidebarFooter>
    </Sidebar>
  );
}
