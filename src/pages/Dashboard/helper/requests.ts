import { axiosInstance } from "@/lib/axios";
import { useDashboardState } from "../state";

export async function handleSearchRequest() {
  const { paginationNumber, searchType, searchTerm } =
    useDashboardState.getState();
  let response;

  if (searchTerm) {
    if (searchType == "any" || !searchType)
      response = await axiosInstance.post(`/api/customer/search/`, {
        term: searchTerm,
        paginationNumber,
      });
    else {
      response = await axiosInstance.post(`/api/customer/search/`, {
        term: searchTerm,
        type: searchType,
        paginationNumber,
      });
    }
  } else {
    response = await axiosInstance.get("/api/customer/");
  }

  return response.data;
}
