import React from "react";
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

export function SelectDemo({
  setSearchBy,
}: {
  setSearchBy: (value: string) => void;
}) {
  return (
    <Select onValueChange={setSearchBy} defaultValue="any">
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
function SearchArea({ setSearchBy, searchTerm, setSearchTerm, handleSearch }) {
  return (
    <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Input
          className="w-full pr-10"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(e);
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
      <SelectDemo setSearchBy={setSearchBy} />
    </div>
  );
}

export { SearchArea };
