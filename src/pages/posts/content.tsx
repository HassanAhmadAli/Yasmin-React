import { useEffect } from "react";
import { fetchAndSetUsers } from "./helper/fetchData";

import { usePostState } from "./state";
import { PostCard } from "./component/postCard";
import { useNavigate } from "react-router";
import { useGlobalState } from "@/globalState";

// todo: implement favorite
export function Content() {
  const setPosts = usePostState((state) => state.setPosts);
  const posts = usePostState((state) => state.posts);
  const navigate = useNavigate();
  const isLoading = usePostState((state) => state.isLoading);
  const setIsLoading = usePostState((state) => state.setIsLoading);
  const user = useGlobalState((state) => state.user);
  if (!user) {
    navigate("/login");
    return null;
  }
  useEffect(() => {
    fetchAndSetUsers();
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
