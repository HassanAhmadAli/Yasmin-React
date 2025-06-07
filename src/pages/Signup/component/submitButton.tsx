import { Button } from "@/components/ui/button";
import { useSignupStore } from "../state";

export function SubmitButton() {
  const isSubmitting = useSignupStore((state) => state.isSubmitting);
  return (
    <Button type="submit" disabled={isSubmitting} className="cursor-pointer">
      {isSubmitting ? "Registering..." : "Register"}
    </Button>
  );
}
