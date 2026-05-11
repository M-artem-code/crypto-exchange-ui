"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Header } from "@/widgets/app-shell/ui/Header";
import { Sidebar, SidebarHeader } from "@/widgets/app-shell/ui/Sidebar";
import { MobileHeader } from "@/widgets/app-shell/ui/MobileHeader";
import { MobileNavigation } from "@/widgets/app-shell/ui/MobileNavigation";
import { useSidebarStore } from "@/features/sidebar-toggle";

export function AppShell({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const sidebarOpen = useSidebarStore((s) => s.open);
  const toggleSidebar = useSidebarStore((s) => s.toggle);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <MobileHeader />
        <div className="flex-1">{children}</div>
        <MobileNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div
        className="sticky top-0 z-50 grid transition-all duration-300"
        style={{
          gridTemplateColumns: sidebarOpen ? "14rem 1fr" : "3.5rem 1fr",
        }}
      >
        <SidebarHeader open={sidebarOpen} onToggle={toggleSidebar} />
        <Header />
      </div>

      <div
        className="grid transition-all duration-300"
        style={{
          gridTemplateColumns: sidebarOpen ? "14rem 1fr" : "3.5rem 1fr",
        }}
      >
        <Sidebar open={sidebarOpen} />
        {children}
      </div>
    </div>
  );
}
