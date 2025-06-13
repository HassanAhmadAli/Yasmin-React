import { useGlobalState } from "@/globalState";
import { usePostPageState } from "../state"
import { Comment } from "@/model/comment";
let fakeComment_ID = 0;
export const saveComment = () => {
    fakeComment_ID += 1;
    const text = usePostPageState.getState().currentComment;
    const date = new Date(Date.now());
    const { name, email, _id } = useGlobalState.getState().user!;
    const comment: Comment = { text, date, authorId: _id, authorName: name, _id: fakeComment_ID, email };
    console.log(comment);
    usePostPageState.getState().addComment(comment);
}