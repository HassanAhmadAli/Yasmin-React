import { useEffect } from "react";
import { getPostsByIds } from "./helper/fetchData";

import { useFavoritePageState } from "./state";
import { PostCard } from "./component/postCard";
import { useNavigate } from "react-router";
import { useGlobalState } from "@/globalState";

// todo: implement favorite
export function Content() {
  const setPosts = useFavoritePageState((state) => state.setPosts);
  const posts = useFavoritePageState((state) => state.posts);
  const navigate = useNavigate();
  const isLoading = useFavoritePageState((state) => state.isLoading);
  const setIsLoading = useFavoritePageState((state) => state.setIsLoading);
  const user = useGlobalState((state) => state.user);
  const Navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      Navigate("/login");
    }
  }, []);
  useEffect(() => {
    getPostsByIds();
  }, []);
  if (isLoading) {
    if (isLoading) {
      return (
        <div className="flex min-h-[400px] items-center justify-center">
          <div className="border-primary h-12 w-12 animate-spin rounded-full border-b-2"></div>
        </div>
      );
    }
  }
  return (
    <div className="flex flex-wrap gap-4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} navigate={navigate} />
      ))}
    </div>
  );
}
