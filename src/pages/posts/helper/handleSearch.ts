import { axiosInstance } from "@/lib/axios";
import { Post } from "@/model/post";
import { usePostState } from "../state";
export const fetchPosts = async (): Promise<Post[]> => {
    const response = await axiosInstance.get("/api/post/");
    return response.data;
};
export const handleSearch = async () => {
    const term = usePostState.getState().searchTerm;
    if (term.trim() === "") {
        usePostState.getState().setIsLoading(true);
        const data: Post[] = await fetchPosts();
        usePostState.getState().setPosts(data);
        usePostState.getState().setIsLoading(false);
    }
    try {
        usePostState.getState().setIsLoading(true);
        const res = await axiosInstance.post("/api/post/search/", {
            term: term
        });
        console.log(res.data)
        const posts = res.data;
        if (Array.isArray(posts)) { usePostState.getState().setPosts(res.data) }
        else {
            { usePostState.getState().setPosts([]) }
        }
        return;
    } catch (error) {
        console.error(error); usePostState.getState().setPosts([])
    } finally {
        usePostState.getState().setIsLoading(false);
    }
};
