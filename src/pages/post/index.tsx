import React, { useContext, useState } from "react";
import { fetchPosts } from "./helper/fetchData";
import { Post } from "@/model/post";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { AuthContext } from "@/authContext";

const extractWords = (text: string) => {
  const words = text.split(/\s+/);
  if (words.length <= 30) {
    return text;
  }
  return words.slice(0, 25).join(" ") + " ...";
};
export function PostPage() {
  const [users, setUsers] = useState<Post[]>([]);
  const auth = useContext(AuthContext);
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
        {auth.jwt}
      </CardContent>
      <Button onClick={()=>{auth.setJwt("****")}}></Button>
    </Card>
  ));
  return <>{elements}</>;
}
