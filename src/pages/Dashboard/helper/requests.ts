import axios from "@/utils/http";

export async function handleSearchRequest(
  paginationNumber: number,
  searchType: string,
  searchTerm: string,
) {
  let response;

  if (searchTerm) {
    if (searchType == "any" || !searchType)
      response = await axios.post(`/api/customer/search/`, {
        term: searchTerm,
      });
    else {
      response = await axios.post(`/api/customer/search/`, {
        term: searchTerm,
        type: searchType,
      });
    }
  } else {
    response = await axios.get("/api/customer/");
  }

  return response.data;
}
