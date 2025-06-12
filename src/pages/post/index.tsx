import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Post } from "@/model/post";
import { getPostById } from "../posts/helper/fetchData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUser, FaClock } from "react-icons/fa";

export function SinglePostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      } finally {
        setIsLoading(false);
      }
    }
    fetchPost();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500 text-center">
          <p className="text-xl font-bold">Error</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <p className="text-gray-500">Post not found</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary mb-4">
            {post.title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaUser className="w-4 h-4" />
              <span>By {post.customer.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="w-4 h-4" />
              <span>5 mins read</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.customer.name}`}
                alt={post.customer.name}
                className="w-16 h-16 rounded-full border-2 border-primary/20 mb-4"
              />
              <div className="text-gray-600">
                <p className="font-medium">Author: {post.customer.name}</p>
                <p>{post.customer.email}</p>
              </div>
            </div>
            <article className="leading-relaxed whitespace-pre-wrap">
              {post.body}
            </article>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
