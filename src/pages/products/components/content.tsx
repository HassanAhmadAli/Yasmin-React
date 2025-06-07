import { useProductPageState } from "../state";
import { RealCellContent } from "./RealContent";
import { SkeletonContent } from "./skeleton";

import { handleSearch } from "../helper/handleSearch";
import { useEffect } from "react";
export function Content() {
  const paginationNumber = useProductPageState(
    (state) => state.paginationNumber,
  );

  // Initial load
  useEffect(() => {
    handleSearch();
  }, [paginationNumber]);
  const isLoading = useProductPageState((state) => state.isLoading);
  const products = useProductPageState((state) => state.products);
  return isLoading ? (
    <SkeletonContent />
  ) : (
    <RealCellContent products={products} />
  );
}
