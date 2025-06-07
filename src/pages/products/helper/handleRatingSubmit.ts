import { useProductPageState } from "../state";
import { toast } from "sonner";
export function handleSubmit() {
  const { rating, resetRatingAndComment } = useProductPageState.getState();
  if (rating === 0) {
    toast.error("Please select a rating");
    return;
  }
  toast.success("Thank you for your rating!");
  resetRatingAndComment();
}
