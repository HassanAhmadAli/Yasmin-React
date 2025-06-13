import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePostState } from "../state";
export function SearchArea({ onSearch }: { onSearch: () => void }) {
  const setSearchTerm = usePostState((state) => state.setSearchTerm);
  return (
    <div className="relative flex flex-row items-center">
      <Input
        className="w-full pr-10"
        placeholder="Search users..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      />
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3"
        onClick={onSearch}
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
