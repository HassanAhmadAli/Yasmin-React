import { AppSidebar } from "../../components/Sidebar";
import { AppNavigationMenu } from "../../components/NavigationBar";
import { Content } from "@/pages/customerProfiles/components/content";
import { useNavigate } from "react-router";
import { useGlobalState } from "@/globalState";
import { useEffect } from "react";

export function Dashboard() {
  const user = useGlobalState((state) => state.user);
  const Navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      Navigate("/login");
    }
  }, []);
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
