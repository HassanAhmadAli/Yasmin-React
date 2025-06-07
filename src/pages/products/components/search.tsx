import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductPageState } from "../state";
import { useEffect } from "react";

export function SelectSearchType() {
  const searchType = useProductPageState((state) => state.searchType);
  const setSearchType = useProductPageState((state) => state.setSearchType);
  const resetPaginationNumber = useProductPageState(
    (state) => state.resetPaginationNumber,
  );
  useEffect(resetPaginationNumber, [searchType]);
  return (
    <Select onValueChange={setSearchType} defaultValue="any">
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Search By" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Search Property</SelectLabel>
          <SelectItem value="any">Search by Any Field {"  "}</SelectItem>
          <SelectItem value="title">Search by title{"  "}</SelectItem>
          <SelectItem value="description">
            Search by description {"  "}
          </SelectItem>
          <SelectItem value="category">Search by category{"  "}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

function SearchArea({ onSearch }: { onSearch: () => void }) {
  const setSearchTerm = useProductPageState((state) => state.setSearchTerm);

  return (
    <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
      <div className="relative flex-1">
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
      <SelectSearchType />
    </div>
  );
}

export { SearchArea };
