import { Post } from "@/model/post";
import { create } from "zustand";

// const [users, setUsers] = useState<Post[]>([]);
interface IPostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}
export const usePostState = create<IPostState>((set) => ({
  posts: [],
  setPosts: (posts: Post[]) => set(() => ({ posts })),
}));
