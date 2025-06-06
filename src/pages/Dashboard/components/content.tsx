import  { useCallback, useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { User } from "@/model/user";
import { handleSearchRequest } from "../helper/requests";
import { SearchArea } from "./search";
import { SkeletonContent } from "./skeleton";
import { RealCellContent } from "./RealContent";
export function Content() {
  return (
    <>
      <ContentWrapped />
    </>
  );
}
function ContentWrapped() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [paginationNumber, setPaginationNumber] = useState(1);
  const [searchType, setSearchType] = useState("any");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.innerWidth]);
  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await handleSearchRequest(
        paginationNumber,
        searchType,
        searchTerm,
      );
      setUsers(data);
    } catch (error: any) {
      console.error("Error fetching users:", error.message);
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, [paginationNumber, searchTerm, searchType]);

  useEffect(() => {
    setPaginationNumber(1);
  }, [searchType, setSearchType]);

  // Initial load
  useEffect(() => {
    handleSearch();
  }, [paginationNumber]);

  return (
    <div className="w-full space-y-2">
      <SearchArea
        setSearchBy={setSearchType}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />
      {isLoading ? (
        <SkeletonContent isMobile={isMobile} />
      ) : (
        <RealCellContent isMobile={isMobile} users={users} />
      )}

      <Pagination>
        <PaginationContent>
          {paginationNumber !== 1 ? (
            <>
              <PaginationItem>
                <button
                  onClick={() => {
                    setPaginationNumber(paginationNumber - 1);
                  }}
                  disabled={isLoading}
                >
                  <PaginationPrevious />
                </button>
              </PaginationItem>
              <PaginationItem className="hidden sm:inline-block">
                <PaginationEllipsis />
              </PaginationItem>
            </>
          ) : (
            <></>
          )}

          <PaginationItem
            className="hidden sm:inline-block"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <PaginationLink>{paginationNumber}</PaginationLink>
          </PaginationItem>
          <PaginationItem className="hidden sm:inline-block">
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <button
              onClick={() => {
                setPaginationNumber(paginationNumber + 1);
              }}
              disabled={isLoading}
            >
              <PaginationNext />
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
