import { Post } from "@/model/post";
import { create } from "zustand";
import { Comment } from "@/model/comment"
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
interface PostPageState {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
  comments: Comment[];
  currentComment: string;
  favoritedPosts: Set<string>;
  addToFavorited: (post: Post) => void;
  removeFromFavorited: (post: Post) => void;
  toggleFavorited: (post: Post) => void;
  setCurrentComment: (text: string) => void;
  setPost: (post: Post) => void;
  setIsLoading: (val: boolean) => void;
  setComments: (comments: Comment[]) => void,
  setError: (error: string | null) => void;
  addComment: (comment: Comment) => void;
  resetState: () => void;
  removeComment: (_id: number) => void
  editComment: (_id: number) => void;
  getIsPostFavorite: (_id: string) => boolean,
}
function saveFavorites(saved: Set<string>) {
  const savedArray = Array.from(saved);
  try {
    localStorage.setItem("savedPostFavorites", JSON.stringify(savedArray))
  } catch (error) {
    console.error("Error saving favorites:", error);
    return;
  }
}
function getFavorites(): Set<string> {
  try {
    const stored = localStorage.getItem("savedPostFavorites");
    if (!stored)
      return new Set<string>();
    const parsed = JSON.parse(stored);
    if (Array.isArray(parsed)) {
      return new Set<string>(parsed);
    }
    return new Set<string>();
  } catch (error) {
    console.error("Error getting favorites:", error);
    return new Set<string>();
  }
}
export const usePostPageState = create<PostPageState>((set, get) => ({
  isLoading: true,
  post: null,
  error: null,
  favoritedPosts: getFavorites(),
  comments: getComments(),
  getIsPostFavorite: (_id: string) => {
    return get().favoritedPosts.has(_id);
  },
  addToFavorited: (post: Post) => {
    set(state => {
      const favoritedPosts = new Set<string>(state.favoritedPosts);
      favoritedPosts.add(post._id);
      saveFavorites(favoritedPosts);
      return { favoritedPosts };
    })
  },
  removeFromFavorited: (post: Post) => {
    set(state => {
      const favoritedPosts = new Set<string>(state.favoritedPosts);
      favoritedPosts.delete(post._id);
      saveFavorites(favoritedPosts);
      return { favoritedPosts };
    })
  },
  toggleFavorited: (post: Post) => {
    set(state => {
      const favoritedPosts = new Set<string>(state.favoritedPosts);

      if (favoritedPosts.has(post._id)) {
        favoritedPosts.delete(post._id);
      }
      else {
        favoritedPosts.add(post._id);
      }
      saveFavorites(favoritedPosts);
      return { favoritedPosts };
    })
  },
  currentComment: "",
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
  removeComment: (_id: number) => {
    set((state) => {
      const comments = [...state.comments];
      const index = comments.findIndex(comment => comment._id === _id);
      if (index !== -1) {
        comments.splice(index, 1);
      }
      return { comments };
    })
  },
  resetState: () => {
    set(() => {
      localStorage.setItem("comments", JSON.stringify(null))
      return { comments: [], currentComment: "" };
    })
  }, editComment: (_id: number) => {
    set((state) => {
      const comments = [...state.comments];
      const index = comments.findIndex(comment => comment._id === _id);
      let currentComment = state.currentComment;
      if (index !== -1) {
        currentComment = comments[index].text;

        comments.splice(index, 1);
      }
      return { comments, currentComment };
    })
  }
}));