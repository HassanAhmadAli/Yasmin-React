import { axiosInstance } from "@/lib/axios";
import { useProductPageState } from "../state";

export async function handleSearchRequest() {
  //todo: add pagination
  let response;
  const { paginationNumber, searchType, searchTerm } =
    useProductPageState.getState();

  if (searchTerm) {
    if (searchType == "any" || !searchType)
      response = await axiosInstance.post("/api/products/search/", {
        term: searchTerm,
        paginationNumber,
      });
    else {
      response = await axiosInstance.post("/api/products/search/", {
        term: searchTerm,
        type: searchType,
        paginationNumber,
      });
    }
  } else {
    response = await axiosInstance.get("/api/products/");
  }

  return response.data;
}
