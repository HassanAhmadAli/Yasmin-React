import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Post } from "@/model/post";
import { NavigateFunction } from "react-router";

const extractWords = (text: string) => {
  const words = text.split(/\s+/);
  if (words.length <= 30) {
    return text;
  }
  return words.slice(0, 25).join(" ") + " ...";
};

export function PostCard(
  { _id, title, body, customer }: Post,
  navigate: NavigateFunction,
) {
  return (
    <Card key={_id}>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <h2>{extractWords(body)}</h2>
        <h2>written by: {customer.name}</h2>
      </CardContent>
      <Button
        onClick={() => {
          navigate(`/post/${_id}`);
        }}
      >
        x
      </Button>
    </Card>
  );
}
