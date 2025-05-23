import React from "react";

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
import { Toaster } from "@/components/ui/sonner";
import { useNavigate } from "react-router";
import { handleSubmit } from "./helper/handleSubmit";
export function Login() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
          <form
            onSubmit={(form) => handleSubmit(form, setIsSubmitting, navigate)}
          >
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
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full cursor-pointer px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="text-muted-foreground h-4 w-4" />
                    ) : (
                      <Eye className="text-muted-foreground h-4 w-4" />
                    )}
                    <span className="sr-only">
                      {showPassword ? "Hide password" : "Show password"}
                    </span>
                  </Button>
                </div>
              </div>
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
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="cursor-pointer"
                    >
                      {isSubmitting ? "Logging In..." : "Continue"}
                    </Button>
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
