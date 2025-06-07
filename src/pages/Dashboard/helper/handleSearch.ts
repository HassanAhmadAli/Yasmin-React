import { useDashboardState } from "../state";
import { handleSearchRequest } from "./requests";

export async function handleSearch() {
  const { setIsLoading, setUsers } = useDashboardState.getState();
  setIsLoading(true);
  try {
    const data = await handleSearchRequest();
    setUsers(data);
  } catch (error: any) {
    console.error("Error fetching users:", error.message);
    setUsers([]);
  } finally {
    setIsLoading(false);
  }
}
