import { Button } from "@/components/ui/button";
import { useLoginStore } from "../state";

export function SubmitButton() {
  const isSubmitting = useLoginStore((state) => state.isSubmitting);
  return (
    <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
      {isSubmitting ? "Logging In..." : "Continue"}
    </Button>
  );
}
