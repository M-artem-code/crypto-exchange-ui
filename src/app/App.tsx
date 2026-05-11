"use client";

import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Sidebar, SidebarHeader } from "./components/Sidebar";
import { DesktopHomeLayout } from "./components/DesktopHomeLayout";
import { MobileHeader } from "./components/MobileHeader";
import { MobileTradingView } from "./components/MobileTradingView";
import { MobileNavigation } from "./components/MobileNavigation";
import { useSidebarStore } from "@/features/sidebar-toggle";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const sidebarOpen = useSidebarStore((s) => s.open);
  const toggleSidebar = useSidebarStore((s) => s.toggle);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    const handleResize = () => {
      update();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <MobileHeader />
        <div className="flex-1">
          <MobileTradingView />
        </div>
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
        <DesktopHomeLayout />
      </div>
    </div>
  );
}
