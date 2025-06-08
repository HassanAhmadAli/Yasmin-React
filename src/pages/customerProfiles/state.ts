import { User } from "@/model/user";
import { create } from "zustand";

export interface IDashboardState {
  searchTerm: string;
  paginationNumber: number;
  searchType: string;
  users: User[];
  setUsers: (users: User[]) => void;
  isLoading: boolean;
  setIsLoading: (val: boolean) => void;
  setSearchTerm: (val: string) => void;
  setPaginationNumber: (val: number) => void;
  setSearchType: (val: string) => void;
  resetPaginationNumber: () => void;
}

export const useDashboardState = create<IDashboardState>((set) => ({
  searchTerm: "",
  paginationNumber: 1,
  searchType: "any",
  setUsers: (users: User[]) => set(() => ({ users })),
  users: [],
  isLoading: false,
  setIsLoading: (isLoading) => set(() => ({ isLoading })),
  setSearchTerm: (searchTerm: string) => set(() => ({ searchTerm })),
  setPaginationNumber: (paginationNumber: number) =>
    set(() => ({ paginationNumber })),
  resetPaginationNumber: () => set(() => ({ paginationNumber: 1 })),
  setSearchType: (searchType: string) => set(() => ({ searchType })),
}));
