import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Sidebar, SidebarHeader } from "./components/Sidebar";
import { DesktopHomeLayout } from "./components/DesktopHomeLayout";
import { MobileHeader } from "./components/MobileHeader";
import { MobileTradingView } from "./components/MobileTradingView";
import { MobileNavigation } from "./components/MobileNavigation";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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
        <SidebarHeader
          open={sidebarOpen}
          onToggle={() => setSidebarOpen((v) => !v)}
        />
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
