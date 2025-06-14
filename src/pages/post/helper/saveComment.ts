import { useGlobalState } from "@/globalState";
import { usePostPageState } from "../state"
import { Comment } from "@/model/comment";
let fakeComment_ID = 0;

const formatter =
    new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
    ;

export const saveComment = () => {
    fakeComment_ID += 1 + usePostPageState.getState().comments.length;
    const text = usePostPageState.getState().currentComment;
    const date = new Date(Date.now());
    const { name, email, _id } = useGlobalState.getState().user!;

    const comment: Comment = {
        text,
        date: formatter.format(date),
        authorId: _id, authorName: name,
        _id: Math.random(),
        email
    };
    console.log(comment);
    usePostPageState.getState().addComment(comment);
}