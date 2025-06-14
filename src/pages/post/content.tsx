import { useParams } from "react-router";
import { useEffect, useRef } from "react";
import { getPostById } from "../posts/helper/fetchData";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaClock } from "react-icons/fa";
import { usePostPageState } from "./state";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { saveComment } from "./helper/saveComment";
export function Content() {
  const { id } = useParams<{ id: string }>();

  const post = usePostPageState((state) => state.post);
  const isLoading = usePostPageState((state) => state.isLoading);
  const error = usePostPageState((state) => state.error);
  const resetState = usePostPageState((state) => state.resetState);
  const setPost = usePostPageState((state) => state.setPost);
  const comments = usePostPageState((state) => state.comments);
  const setIsLoading = usePostPageState((state) => state.setIsLoading);
  const setError = usePostPageState((state) => state.setError);
  const setCurrentComment = usePostPageState(
    (state) => state.setCurrentComment,
  );
  const newCommentTextAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    async function fetchPost() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getPostById(id as string);
        setPost(data);
      } catch (error) {
        setError("Failed to load post. Please try again later.");
        console.error("Error fetching post:", error);
      }
      setIsLoading(false);
      resetState();
    }
    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="border-primary h-12 w-12 animate-spin rounded-full border-b-2"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center text-red-500">
          <p className="text-xl font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Card className="bg-white/50 backdrop-blur-sm dark:bg-black/50">
        <CardHeader>
          <CardTitle className="text-primary mb-4 text-3xl font-bold">
            {post.title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="border-3 flex h-8 w-8 items-center justify-center rounded-full border-gray-300 bg-purple-600 font-semibold text-white dark:border-gray-700 dark:bg-purple-400 dark:text-black">
                {post.customer.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span>{post.customer.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="h-4 w-4" />
              <span>5 mins read</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="text-gray-600">
                <p>{post.customer.email}</p>
                <p>from : {post.customer.company.name}</p>
              </div>
            </div>
            <article className="whitespace-pre-wrap leading-relaxed">
              {post.body}
            </article>
          </div>
        </CardContent>
        <CardFooter className="gap-4">
          <Textarea
            ref={newCommentTextAreaRef}
            onChange={(e) => {
              setCurrentComment(e.target.value);
            }}
          />
          <Button
            variant="default"
            onClick={() => {
              saveComment();
              newCommentTextAreaRef.current!.value = "";
            }}
          >
            Comment
          </Button>
        </CardFooter>
        <CardContent className="flex grid gap-4">
          {comments.map((comment, index) => (
            <Card key={index}>
              <CardHeader>{comment.text}</CardHeader>
              <span className="font-medium">
                By <span className="text-primary/80">{comment.authorName}</span>
              </span>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
