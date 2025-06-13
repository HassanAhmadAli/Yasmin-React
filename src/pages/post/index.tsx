import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Post } from "@/model/post";
import { getPostById } from "../posts/helper/fetchData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaUser, FaClock } from "react-icons/fa";
import { usePostPageState } from "./state";

export function SinglePostPage() {
  const { id } = useParams<{ id: string }>();

  const post = usePostPageState((state) => state.post);
  const isLoading = usePostPageState((state) => state.isLoading);
  const error = usePostPageState((state) => state.error);
  const setPost = usePostPageState((state) => state.setPost);
  const setIsLoading = usePostPageState((state) => state.setIsLoading);
  const setError = usePostPageState((state) => state.setError);

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
      <Card className="bg-white/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-primary mb-4 text-3xl font-bold">
            {post.title}
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <FaUser className="h-4 w-4" />
              <span>By {post.customer.name}</span>
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
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.customer.name}`}
                alt={post.customer.name}
                className="border-primary/20 mb-4 h-16 w-16 rounded-full border-2"
              />
              <div className="text-gray-600">
                <p className="font-medium">Author: {post.customer.name}</p>
                <p>{post.customer.email}</p>
              </div>
            </div>
            <article className="whitespace-pre-wrap leading-relaxed">
              {post.body}
            </article>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
