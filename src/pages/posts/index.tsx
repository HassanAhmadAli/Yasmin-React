import { useEffect } from "react";
import { fetchPosts } from "./helper/fetchData";
import { Post } from "@/model/post";

import { usePostState } from "./state";
import { PostCard } from "./component/postCard";
import { useNavigate } from "react-router";

export function PostsPage() {
  const setPosts = usePostState((state) => state.setPosts);
  const posts = usePostState((state) => state.posts);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const data: Post[] = await fetchPosts();
      setPosts(data);
    };
    fetchAndSetUsers();
  }, []);
  return (
    <div className="flex flex-wrap gap-4">
      {posts.map((post) => PostCard(post, navigate))}
    </div>
  );
}
