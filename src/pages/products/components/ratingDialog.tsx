import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { handleSubmit } from "../helper/handleRatingSubmit";
import { CommentInputField } from "./rating/commentInputField";
import { Stars } from "./rating/stars";

export function RatingDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Rating</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Rating</DialogTitle>
          <DialogDescription>We value your opinion</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="comment" className="text-right">
              Comment
            </Label>
            <CommentInputField />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Rating</Label>
            <Stars />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Submit Rating
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
