"use client";

import { AppShell } from "@/widgets/app-shell";
import { DesktopHomeWidget, MobileHomeWidget } from "@/widgets/home-layout";

export function HomePage() {
  return (
    <AppShell>
      <div className="hidden md:block">
        <DesktopHomeWidget />
      </div>
      <div className="block md:hidden">
        <MobileHomeWidget />
      </div>
    </AppShell>
  );
}
