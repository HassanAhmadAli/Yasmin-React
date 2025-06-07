import { Input } from "@/components/ui/input";
import { useProductPageState } from "../../state";

export function CommentInputField() {
    const comment = useProductPageState((state) => state.comment);
    const setComment = useProductPageState((state) => state.setComment);
    return (
      <Input
        id="comment"
        placeholder="Enter your comment"
        className="col-span-3"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
    );
  };