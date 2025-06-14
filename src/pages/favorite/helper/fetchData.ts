import { axiosInstance } from "@/lib/axios";
import { Post } from "@/model/post";
import { useFavoritePageState } from "../state";
import { usePostPageState } from "@/pages/post/state";

export const getPostsByIds = async (): Promise<void> => {
  useFavoritePageState.getState().setIsLoading(true)
  const posts = Array.of(...usePostPageState.getState().favoritedPosts);
  const res = await axiosInstance.post("/api/post/getByIdBulk", {
    id: posts
  });
  useFavoritePageState.getState().setPosts(res.data);
  useFavoritePageState.getState().setIsLoading(false)
};
