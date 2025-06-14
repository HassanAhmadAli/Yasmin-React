import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Post } from "@/model/post";
import { NavigateFunction } from "react-router";
import { ArrowRight, Star } from "lucide-react";
import { usePostPageState } from "@/pages/post/state";
const extractWords = (text: string) => {
  const words = text.split(/\s+/);
  if (words.length <= 30) {
    return text;
  }
  return words.slice(0, 25).join(" ") + "...";
};

export function PostCard(post: Post, navigate: NavigateFunction) {
  // const isFavorite = usePostPageState((state) =>
  //   state.favoritedPosts.has(post._id),
  // );
  // const toggleFavorited = usePostPageState((state) => state.toggleFavorited);
  const isFavorite = true;
  const toggleFavorited = (s: string) => {};
  return (
    <Card
      key={post._id}
      className="h-4xl flex w-[30%] min-w-[300px] flex-col bg-white/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/40 hover:shadow-xl dark:bg-black/50 dark:hover:bg-black/40"
    >
      <CardHeader className="space-y-2 pb-3">
        <CardTitle className="text-primary/90 hover:text-primary h-15 line-clamp-2 text-xl font-bold">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <p className="line-clamp-3 text-base text-gray-600/90 dark:text-gray-300/90">
          {extractWords(post.body)}
        </p>
        <div className="mt-auto flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
          <div className="relative">
            <div className="border-3 flex h-10 w-10 items-center justify-center rounded-full border-gray-300 bg-purple-600 font-semibold text-white">
              {post.customer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
          <span className="font-medium">
            By{" "}
            <span className="text-primary/80 dark:text-primary/80">
              {post.customer.name}
            </span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="mt-2 flex items-center justify-between border-t pt-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(`/post/${post._id}`)}
          className="hover:text-primary hover:bg-primary/5 flex items-center gap-2 transition-colors"
        >
          Read More <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => {
            toggleFavorited(post);
          }}
        >
          <Star
            className={`h-6 w-6 cursor-pointer ${
              isFavorite
                ? "fill-orange-400 text-orange-400"
                : "fill-white-400 text-orange-400"
            } transition-colors hover:bg-yellow-50`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
