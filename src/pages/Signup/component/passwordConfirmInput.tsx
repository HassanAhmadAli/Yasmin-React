import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useSignupStore } from "../state";
import { shallow } from "zustand/shallow";
export function PasswordConfirmInput() {
  const showConfirmPassword = useSignupStore(
    (state) => state.showConfirmPassword,
  );
  const toggleShowConfirmPassword = useSignupStore(
    (state) => state.toggleShowConfirmPassword,
  );

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <div className="relative">
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm your password"
          required
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full cursor-pointer px-3 py-2 hover:bg-transparent"
          onClick={toggleShowConfirmPassword}
          tabIndex={-1}
        >
          {showConfirmPassword ? (
            <EyeOff className="text-muted-foreground h-4 w-4" />
          ) : (
            <Eye className="text-muted-foreground h-4 w-4" />
          )}
          <span className="sr-only">
            {showConfirmPassword ? "Hide password" : "Show password"}
          </span>
        </Button>
      </div>
    </div>
  );
}
