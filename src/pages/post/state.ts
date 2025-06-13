import { Post } from "@/model/post";
import { create } from "zustand";

interface PostPageState {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
  setPost: (post: Post) => void;
  setIsLoading: (val: boolean) => void;
  setError: (error: string | null) => void;
}

export const usePostPageState = create<PostPageState>((set) => ({
  isLoading: true,
  post: null,
  error: null,
  setPost: (post: Post) => set({ post }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
}));
