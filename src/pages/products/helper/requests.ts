import { axiosInstance } from "@/lib/axios";

export async function handleSearchRequest(
  //todo: add pagination
  paginationNumber: number,
  searchType: string,
  searchTerm: string,
) {
  let response;

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
