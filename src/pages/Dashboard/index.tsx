import React, { useEffect } from "react";
import { AppSidebar } from "../../components/Sidebar";
import { AppNavigationMenu } from "../../components/NavigationBar";
import { Content } from "@/pages/dashboard/components/content";

export function Dashboard() {
  return (
    <div className="grid max-w-[100vw] gap-4 p-4">
      <AppSidebar>
        <div className="flex h-full w-full flex-col">
          <nav>
            <AppNavigationMenu />
          </nav>
          <main className="flex-1 p-4">
            <Content />
          </main>
        </div>
      </AppSidebar>
    </div>
  );
}
