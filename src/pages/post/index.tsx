import { useEffect } from "react";
import { fetchPosts } from "./helper/fetchData";
import { Post } from "@/model/post";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { usePostState } from "./state";

const extractWords = (text: string) => {
  const words = text.split(/\s+/);
  if (words.length <= 30) {
    return text;
  }
  return words.slice(0, 25).join(" ") + " ...";
};
export function PostPage() {
  const setPosts = usePostState((state) => state.setPosts);
  const posts = usePostState((state) => state.posts);

  useEffect(() => {
    const fetchAndSetUsers = async () => {
      const data: Post[] = await fetchPosts();
      setPosts(data);
    };
    fetchAndSetUsers();
  }, []);
  const elements = posts.map((post) => (
    <Card key={post._id}>
      <CardTitle>{post.title}</CardTitle>
      <CardContent>
        <h1>{extractWords(post.body)}</h1>
        <h1>written by: {post.customer.name}</h1>
      </CardContent>
      <Button onClick={() => {}}></Button>
    </Card>
  ));
  return <>{elements}</>;
}
