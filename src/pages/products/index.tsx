import { AppSidebar } from "../../components/Sidebar";
import { AppNavigationMenu } from "../../components/NavigationBar";

import { SearchArea } from "./components/search";
import { Content } from "./components/content";
import { PaginationItems } from "./components/paginationItems";
import { handleSearch } from "./helper/handleSearch";
export function ProductsPage() {
  return (
    <div className="grid max-w-[100vw] gap-4 p-4">
      <AppSidebar>
        <div className="flex h-full w-full flex-col">
          <nav>
            <AppNavigationMenu />
          </nav>
          <main className="flex-1 p-4">
            <div className="w-full space-y-2">
              <SearchArea onSearch={handleSearch} />
              <Content />
              <PaginationItems />
            </div>
          </main>
        </div>
      </AppSidebar>
    </div>
  );
}
