import { usePostPageState } from "../state"
import { Comment } from "@/model/comment"
export const saveComment = () => {
    const text = usePostPageState.getState().currentComment;
    const date = new Date(Date.now());
    const authorId = 0;
    const authorName = "";
    const _id = 0;
    usePostPageState.getState().addComment({ text, date, authorId, authorName, _id });

}