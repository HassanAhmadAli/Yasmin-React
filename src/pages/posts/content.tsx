import { useEffect } from "react";
import { fetchPosts } from "./helper/fetchData";
import { Post } from "@/model/post";

import { usePostState } from "./state";
import { PostCard } from "./component/postCard";
import { useNavigate } from "react-router";
// todo: implement favorite
export function Content() {
  const setPosts = usePostState((state) => state.setPosts);
  const posts = usePostState((state) => state.posts);
  const navigate = useNavigate();
  const isLoading = usePostState((state) => state.isLoading);
  const setIsLoading = usePostState((state) => state.setIsLoading);
  useEffect(() => {
    const fetchAndSetUsers = async () => {
      setIsLoading(true);
      const data: Post[] = await fetchPosts();
      setPosts(data);
      setIsLoading(false);
    };
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
