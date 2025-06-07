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

import { SearchArea } from "./search";
import { SkeletonContent } from "./skeleton";
import { RealCellContent } from "./RealContent";
import { handleSearch } from "../helper/handleSearch";
import { useDashboardState } from "../state";
export function Content() {
  return (
    <>
      <ContentWrapped />
    </>
  );
}
function ContentWrapped() {
  const setPaginationNumber = useDashboardState(
    (state) => state.setPaginationNumber,
  );
  const searchType = useDashboardState((state) => state.searchType);
  const paginationNumber = useDashboardState((state) => state.paginationNumber);
  const setSearchType = useDashboardState((state) => state.setSearchType);
  const isLoading = useDashboardState((state) => state.isLoading);

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
      {isLoading ? <SkeletonContent /> : <RealCellContent />}

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
