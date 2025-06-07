import { useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { handleSearch } from "../helper/handleSearch";
import { SearchArea } from "./search";
import { ItemsWrapper } from "./itemsWrapper";
import { Item } from "./Item";
import { useDashboardState } from "../state";

export function Content() {
  const setPaginationNumber = useDashboardState(
    (state) => state.setPaginationNumber,
  );
  const searchType = useDashboardState((state) => state.searchType);
  const paginationNumber = useDashboardState((state) => state.paginationNumber);
  const isLoading = useDashboardState((state) => state.isLoading);
  const users = useDashboardState((state) => state.users);
  useEffect(() => {
    setPaginationNumber(1);
  }, [searchType]);

  // Initial load
  useEffect(() => {
    handleSearch();
  }, [paginationNumber]);

  return (
    <div className="w-full space-y-2">
      <SearchArea onSearch={handleSearch} />
      <ItemsWrapper>
        {users.length === 0
          ? Array.from({ length: 7 }, (_, i) => i).map((ind) => (
              <Item user={null} key={ind} />
            ))
          : users.map((user) => <Item user={user} key={user._id}></Item>)}
      </ItemsWrapper>
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
