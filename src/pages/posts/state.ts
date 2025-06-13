import { Post } from "@/model/post";
import { create } from "zustand";

// const [users, setUsers] = useState<Post[]>([]);
interface IPostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  searchTerm: string;
  paginationNumber: number;
  searchType: string;
  isLoading: boolean;
  setSearchTerm: (searchTerm: string) => void;
  setPaginationNumber: (paginationNumber: number) => void;
  setSearchType: (searchType: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  resetPaginationNumber: () => void;
}
export const usePostState = create<IPostState>((set) => ({
  posts: [],
  setPosts: (posts: Post[]) => set(() => ({ posts })),
  searchTerm: "",
  paginationNumber: 1,
  searchType: "any",
  isLoading: false,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setPaginationNumber: (paginationNumber: number) => set({ paginationNumber }),
  setSearchType: (searchType: string) => set({ searchType }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  resetPaginationNumber: () => set({ paginationNumber: 1 })
}));
