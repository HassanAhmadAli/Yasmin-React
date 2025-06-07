import { useState } from "react";

import { Eye, EyeOff } from "lucide-react";
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
import { PasswordConfirmInput } from "./component/passwordConfirmInput";
import { SubmitButton } from "./component/submitButton";
export function Signup() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col items-center justify-center hue-rotate-180">
      <Card className="w-[400px] shadow-lg shadow-gray-400">
        <CardHeader>
          <CardTitle>Create account</CardTitle>
          <CardDescription>
            Register to get started with our service.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(form) => handleSubmit(form, navigate)}
          >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                />
              </div>
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
              <PasswordConfirmInput />
            </div>
            <CardFooter className="flex justify-between px-0 pt-6">
              <Button
                type="button"
                variant="outline"
                className="cursor-pointer"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Cancel
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
