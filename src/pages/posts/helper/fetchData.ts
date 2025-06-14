import { axiosInstance } from "@/lib/axios";
import { Post } from "@/model/post";
import { usePostState } from "../state";
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get("/api/post/");
  return response.data;
};
export const getPostById = async (id: string): Promise<Post> => {
  const res = await axiosInstance.get(`/api/post/${id}`);
  return res.data;
};
export const fetchAndSetUsers = async () => {
  usePostState.getState().setIsLoading(true);
  const data: Post[] = await fetchPosts();
  usePostState.getState().setPosts(data);
  usePostState.getState().setIsLoading(false);
};