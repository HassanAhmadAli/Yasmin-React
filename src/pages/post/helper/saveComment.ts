import { useGlobalState } from "@/globalState";
import { usePostPageState } from "../state"
let counter = 0;
export const saveComment = () => {
    counter += 1;
    const text = usePostPageState.getState().currentComment;
    const date = new Date(Date.now());
    const { name, email, _id } = useGlobalState.getState().user!;
    usePostPageState.getState().addComment({ text, date, authorId: _id, authorName: name, _id: counter, email });
}