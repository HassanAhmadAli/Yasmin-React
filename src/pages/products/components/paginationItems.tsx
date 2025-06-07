import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useProductPageState } from "../state";
export function PaginationItems() {
  const isLoading = useProductPageState((state) => state.isLoading);
  const increamentPaginationNumber = useProductPageState(
    (state) => state.increamentPaginationNumber,
  );
  const decreasePaginationNumber = useProductPageState(
    (state) => state.decreasePaginationNumber,
  );

  const paginationNumber = useProductPageState(
    (state) => state.paginationNumber,
  );
  return (
    <Pagination>
      <PaginationContent>
        {paginationNumber !== 1 && (
          <>
            <PaginationItem>
              <button onClick={decreasePaginationNumber} disabled={isLoading}>
                <PaginationPrevious />
              </button>
            </PaginationItem>
            <PaginationItem className="hidden sm:inline-block">
              <PaginationEllipsis />
            </PaginationItem>
          </>
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
          <button onClick={increamentPaginationNumber} disabled={isLoading}>
            <PaginationNext />
          </button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
