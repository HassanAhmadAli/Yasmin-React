import { Post } from "@/model/post";
import { create } from "zustand";

interface IFavoritePageState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  searchTerm: string;
  paginationNumber: number;
  isLoading: boolean;
  setSearchTerm: (searchTerm: string) => void;
  setPaginationNumber: (paginationNumber: number) => void;
  setIsLoading: (isLoading: boolean) => void;
  resetPaginationNumber: () => void;
}
export const useFavoritePageState = create<IFavoritePageState>((set) => ({
  posts: [],
  setPosts: (posts: Post[]) => set(() => ({ posts })),
  searchTerm: "",
  paginationNumber: 1,
  isLoading: false,
  setSearchTerm: (searchTerm: string) => set({ searchTerm }),
  setPaginationNumber: (paginationNumber: number) => set({ paginationNumber }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  resetPaginationNumber: () => set({ paginationNumber: 1 })
}));
