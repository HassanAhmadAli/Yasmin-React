import { createContext, ReactNode, useState } from "react";
import React from "react";
interface SearchContextContent {
  searchTerm: string;
  setSearchTerm: (item: string) => void;
}
export const SearchContext = createContext<SearchContextContent>({
  searchTerm: "",
  setSearchTerm: () => {},
});
export function SearchContextProvider({
  ...children
}: {
  children: ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider
      value={{ searchTerm, setSearchTerm }}
      {...children}
    ></SearchContext.Provider>
  );
}
