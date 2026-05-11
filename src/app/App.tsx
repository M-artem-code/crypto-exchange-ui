import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { DesktopHomeLayout } from "./components/DesktopHomeLayout";
import { MobileHeader } from "./components/MobileHeader";
import { MobileTradingView } from "./components/MobileTradingView";
import { MobileNavigation } from "./components/MobileNavigation";

export default function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="h-screen flex flex-col bg-background">
        <MobileHeader />
        <div className="flex-1 overflow-y-auto">
          <MobileTradingView />
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-background">
      <Header />
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <DesktopHomeLayout />
      </div>
    </div>
  );
}
