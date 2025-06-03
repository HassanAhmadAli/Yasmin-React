import { axiosInstance } from "@/lib/axios";
import { Post } from "@/model/post";
export const fetchPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get("/api/post/");
  return response.data;
};
