import { Post } from "@/model/post";
import { create } from "zustand";
import { Comment } from "@/model/comment"
interface PostPageState {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
  comments: Comment[];
  currentComment: string;
  setCurrentComment: (text: string) => void;
  setPost: (post: Post) => void;
  setIsLoading: (val: boolean) => void;
  setError: (error: string | null) => void;
  addComment: (comment: Comment) => void;
}

export const usePostPageState = create<PostPageState>((set) => ({
  isLoading: true,
  post: null,
  error: null,
  comments: [],
  currentComment: "string",
  setCurrentComment: (currentComment: string) => set({ currentComment }),
  setPost: (post: Post) => set({ post }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  addComment: (comment: Comment) => set(state => ({ comments: [...state.comments, comment] })),
}));