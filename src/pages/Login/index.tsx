import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useNavigate } from "react-router";
import { handleSubmit } from "./helper/handleSubmit";
import { PasswordInput } from "./component/passwordInput";
import { SubmitButton } from "./component/submitButton";
export function Login() {
  const navigate = useNavigate();

  return (
    <div className="mt-[100px] flex h-screen flex-col items-center md:justify-center">
      <Card className="w-[400px] shadow-lg shadow-gray-400">
        <CardHeader>
          <CardTitle>login To Your Account</CardTitle>
          <CardDescription>
            Register to get started with our service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={(form) => handleSubmit(form, navigate)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <PasswordInput />
            </div>
            <CardFooter className="flex justify-between px-0 pt-6">
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up Instead
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <SubmitButton />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Your privacy is our priority</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
