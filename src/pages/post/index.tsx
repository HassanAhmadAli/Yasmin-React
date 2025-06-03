import React, { useState } from "react";
import { fetchPosts } from "./helper/fetchData";
import { Post } from "@/model/post";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
const extractWords = (text: string) => {
  const words = text.split(/\s+/);
  if (words.length <= 30) {
    return text;
  }
  return words.slice(0, 25).join(" ") + " ...";
};
export function PostPage() {
  const [users, setUsers] = useState<Post[]>([]);
  React.useEffect(() => {
    const fetchAndSetUsers = async () => {
      const data: Post[] = await fetchPosts();
      setUsers(data);
    };
    fetchAndSetUsers();
  }, []);

  const elements = users.map((user) => (
    <Card key={user._id}>
      <CardTitle>{user.title}</CardTitle>
      <CardContent>
        <h1>{extractWords(user.body)}</h1>
        <h1>written by: {user.customer.name}</h1>
      </CardContent>
    </Card>
  ));
  return <>{elements}</>;
}
