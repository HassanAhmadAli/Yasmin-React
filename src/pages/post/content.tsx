import { useParams } from "react-router";
import { useEffect } from "react";
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
import { Edit, Trash } from "lucide-react";

function CommentTextArea() {
  const currentComment = usePostPageState((state) => state.currentComment);
  const setCurrentComment = usePostPageState(
    (state) => state.setCurrentComment,
  );
  return (
    <Textarea
      value={currentComment}
      onChange={(e) => {
        setCurrentComment(e.target.value);
      }}
    />
  );
}

export function Content() {
  const { id } = useParams<{ id: string }>();
  const post = usePostPageState((state) => state.post);
  const isLoading = usePostPageState((state) => state.isLoading);
  const error = usePostPageState((state) => state.error);
  const setPost = usePostPageState((state) => state.setPost);
  const comments = usePostPageState((state) => state.comments);
  const setIsLoading = usePostPageState((state) => state.setIsLoading);
  const setError = usePostPageState((state) => state.setError);
  const removeComment = usePostPageState((state) => state.removeComment);
  const editComment = usePostPageState((state) => state.editComment);
  const setCurrentComment = usePostPageState(
    (state) => state.setCurrentComment,
  );
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
              <div className="text-gray-600 dark:text-gray-400">
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
          <CommentTextArea />
          <Button
            variant="default"
            onClick={() => {
              saveComment();
              setCurrentComment("");
            }}
          >
            Comment
          </Button>
        </CardFooter>
        <CardContent className="flex grid gap-4">
          {comments.map((comment) => (
            <Card className="gap-2 pb-1.5 pl-4 pt-1" key={comment._id}>
              <div className="flex flex-row gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-gray-300 bg-purple-600 text-[12px] font-semibold text-white dark:border-gray-700 dark:bg-purple-400 dark:text-black">
                  {comment.authorName
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <span>{comment.authorName}</span> {","}
                <span>{comment.date}</span>
                <Button
                  variant="destructive"
                  onClick={() => {
                    removeComment(comment._id);
                  }}
                >
                  <Trash />
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    editComment(comment._id);
                  }}
                >
                  <Edit />
                </Button>
              </div>
              <span className="pl-0.5 font-medium">{comment.text}</span>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
