import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Post } from "@/model/post";
import { useNavigate } from "react-router";
const extractWords = (text: string) => {
  const words = text.split(/\s+/);
  if (words.length <= 30) {
    return text;
  }
  return words.slice(0, 25).join(" ") + " ...";
};
export function PostCard(post: Post) {
  const navigate = useNavigate();
  // Display author name on each post card.
  return (
    <Card key={post._id}>
      <CardTitle>{post.title}</CardTitle>
      <CardContent>
        <h2>{extractWords(post.body)}</h2>
        <h2>written by: {post.customer.name}</h2>
      </CardContent>
      <Button
        onClick={async () => {
          await navigate(`/post/${post._id}`);
        }}
      >
        x
      </Button>
    </Card>
  );
}
