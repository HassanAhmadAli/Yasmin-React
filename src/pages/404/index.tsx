import { useLocation, useNavigate } from "react-router";
import { AppSidebar } from "../../components/Sidebar";
import { AppNavigationMenu } from "../../components/NavigationBar";
import { Content } from "./content";
import { useGlobalState } from "@/globalState";
import { useEffect } from "react";

export function Page404() {
  const user = useGlobalState((state) => state.user);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate("/login");
    }
  }, []);
  const pathname = useLocation().pathname;
  return (
    <div className="grid max-w-[100vw] gap-4 p-4">
      <AppSidebar>
        <div className="flex h-full w-full flex-col">
          <nav>
            <AppNavigationMenu />
          </nav>
          <main className="flex-1 p-4">
            <div className="flex min-h-[400px] items-center justify-center">
              <div className="text-center text-red-500">
                <p className="text-xl font-bold">Error</p>
                <h1>404 - Page Not Found</h1>
                <h1>{`no such route "${pathname}"`}</h1>
              </div>
            </div>
          </main>
        </div>
      </AppSidebar>
    </div>
  );
}
