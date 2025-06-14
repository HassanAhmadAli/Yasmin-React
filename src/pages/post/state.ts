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
  setComments: (comments: Comment[]) => void,
  setError: (error: string | null) => void;
  addComment: (comment: Comment) => void;
  resetState: () => void;
}
const getComments = (): Comment[] => {
  const storedComments = localStorage.getItem("comments");
  if (!storedComments) return [];
  try {
    const comments = JSON.parse(storedComments);
    if (comments === null)
      return []
    return comments;
  } catch (error) {
    console.error("Error parsing stored user:", error);
    return [];
  }
};
export const usePostPageState = create<PostPageState>((set) => ({
  isLoading: true,
  post: null,
  error: null,
  comments: getComments(),
  currentComment: "string",
  setCurrentComment: (currentComment: string) => set({ currentComment }),
  setPost: (post: Post) => set({ post }),
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
  setError: (error: string | null) => set({ error }),
  setComments: (comments: Comment[]) => {
    localStorage.setItem("comments", JSON.stringify(comments))
    set(state => ({}))
  },
  addComment: (comment: Comment) => {
    set(state => {
      const comments = [...state.comments, comment]
      localStorage.setItem("comments", JSON.stringify(comments))
      return { comments };
    })
  },
  resetState: () => {

    set(() => {
      localStorage.setItem("comments", JSON.stringify(null))
      return { comments: [], currentComment: "" };
    })
  }
}));