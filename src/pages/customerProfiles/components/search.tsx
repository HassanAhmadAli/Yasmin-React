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
import { useDashboardState } from "../state";
import { useEffect } from "react";

export function SelectSearchType() {
  const searchType = useDashboardState((state) => state.searchType);
  const setSearchType = useDashboardState((state) => state.setSearchType);
  const resetPaginationNumber = useDashboardState(
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
          <SelectItem value="name">Search by Name</SelectItem>
          <SelectItem value="email">Search by Email</SelectItem>
          <SelectItem value="address">Search by Address</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export function SearchArea({ onSearch }: { onSearch: () => void }) {
  const setSearchTerm = useDashboardState((state) => state.setSearchTerm);
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
