import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { usePostState } from "../state";
import { handleSearch } from "../helper/handleSearch";
export function SearchArea() {
  const setSearchTerm = usePostState((state) => state.setSearchTerm);
  return (
    <div className="relative mb-2 flex w-[95%] flex-row items-center justify-center">
      <Input
        className="w-full pr-10"
        placeholder="Search Posts..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            try {
              handleSearch();
            } catch (error) {
              console.log("error");
            }
          }
        }}
      />
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-0 top-0 h-full px-3"
        onClick={handleSearch}
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
