import { useEffect } from "react";
import { fetchPosts } from "./helper/fetchData";
import { Post } from "@/model/post";

import { usePostState } from "./state";
import { PostCard } from "./component/postCard";

export function PostsPage() {
  const setPosts = usePostState((state) => state.setPosts);
  const posts = usePostState((state) => state.posts);

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const data: Post[] = await fetchPosts();
      setPosts(data);
    };
    fetchAndSetUsers();
  }, []);
  return <>{posts.map((post) => PostCard(post))}</>;
}
