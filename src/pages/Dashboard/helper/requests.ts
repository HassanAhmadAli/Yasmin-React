import {axiosInstance} from "@/lib/axios";

export async function handleSearchRequest(
  paginationNumber: number,
  searchType: string,
  searchTerm: string,
) {
  let response;

  if (searchTerm) {
    if (searchType == "any" || !searchType)
      response = await axiosInstance.post(`/api/customer/search/`, {
        term: searchTerm,
      });
    else {
      response = await axiosInstance.post(`/api/customer/search/`, {
        term: searchTerm,
        type: searchType,
      });
    }
  } else {
    response = await axiosInstance.get("/api/customer/");
  }

  return response.data;
}
