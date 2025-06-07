import { Product } from "@/model/product";
import { create } from "zustand";

export interface IProductPageState {
  rating: number;
  setRating: (val: number) => void;
  comment: string;
  setComment: (val: string) => void;
  resetRatingAndComment: () => void;
  products: Product[];
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product) => void;
  isExistProductSelected: () => boolean;
  resetSelectedProduct: () => void;
  searchTerm: string;
  paginationNumber: number;
  searchType: string;
  isLoading: boolean;
  setProducts: (products: Product[]) => void;
  setSearchTerm: (searchTerm: string) => void;
  setPaginationNumber: (paginationNumber: number) => void;
  setSearchType: (searchType: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  resetPaginationNumber: () => void;
  increamentPaginationNumber: () => void;
  decreasePaginationNumber: () => void;
}
export const useProductPageState = create<IProductPageState>((set, get) => ({
  resetRatingAndComment: () => set(() => ({ rating: 0, comment: "" })),
  rating: 0,
  setRating: (val: number) => set(() => ({ rating: val })),
  comment: "",
  setComment: (val: string) => set(() => ({ comment: val })),
  selectedProduct: null,
  resetSelectedProduct: () => set(() => ({ selectedProduct: null })),
  setSelectedProduct: (product: Product) =>
    set(() => ({ selectedProduct: product })),
  isExistProductSelected: () => get().selectedProduct !== null,
  products: [],
  searchTerm: "",
  paginationNumber: 1,
  searchType: "any",
  isLoading: false,
  setProducts: (products: Product[]) => set(() => ({ products: products })),
  setSearchTerm: (searchTerm: string) =>
    set(() => ({ searchTerm: searchTerm })),
  setPaginationNumber: (paginationNumber: number) =>
    set(() => ({ paginationNumber: paginationNumber })),
  setSearchType: (searchType: string) =>
    set(() => ({ searchType: searchType })),
  setIsLoading: (isLoading: boolean) => set(() => ({ isLoading: isLoading })),
  resetPaginationNumber: () => set(() => ({ paginationNumber: 1 })),
  increamentPaginationNumber: () =>
    set((state) => ({ paginationNumber: state.paginationNumber + 1 })),
  decreasePaginationNumber: () =>
    set((state) => ({ paginationNumber: state.paginationNumber - 1 })),
}));
