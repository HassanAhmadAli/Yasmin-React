import { useProductPageState } from "../state";
import { handleSearchRequest } from "./requests";
const { setIsLoading, setProducts } = useProductPageState.getState();
export const handleSearch = async () => {
  setIsLoading(true);
  try {
    const data = await handleSearchRequest();
    setProducts(data);
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    setProducts([]);
  } finally {
    setIsLoading(false);
  }
};
