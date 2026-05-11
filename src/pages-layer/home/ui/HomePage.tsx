"use client";

import { AppShell } from "@/widgets/app-shell";
import { DesktopHomeLayout } from "@/app/components/DesktopHomeLayout";
import { MobileTradingView } from "@/app/components/MobileTradingView";

export function HomePage() {
  return (
    <AppShell>
      <div className="hidden md:block">
        <DesktopHomeLayout />
      </div>
      <div className="block md:hidden">
        <MobileTradingView />
      </div>
    </AppShell>
  );
}
