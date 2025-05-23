import axios from "@/utils/http";

export async function handleSearchRequest(
  paginationNumber: number,
  searchType: string,
  searchTerm: string,
) {
  const response = await axios.get(`/api/customer/page/${paginationNumber}`);
  return response.data;
}
