import axiosInstance from "@/utils/http";
import { toast } from "sonner";
import React from "react";
export async function handleSubmit(
  formEvent: React.FormEvent<HTMLFormElement>,
  setIsSubmitting: (val: boolean) => void,
  navigate: (path: string) => void,
) {
  formEvent.preventDefault();
  setIsSubmitting(true);
  const formData = new FormData(formEvent.currentTarget);
  const userData = {
    name: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const passwordConfirmation = formData.get("confirmPassword");
  if (userData.password !== passwordConfirmation) {
    toast.dismiss();
    toast.error("Passswords Does not match");
    setIsSubmitting(false);
    return;
  }
  const p1 = axiosInstance.post("/api/signup", userData);
  toast.loading("Registering...");
  try {
    const response = await p1;
    toast.dismiss();
    if (response.status > 300 || response.status < 200) {
      throw new Error("Registration failed. Please try again.");
    }
    toast.success("Registration successful");
    localStorage.setItem("token", response.data.token);

    navigate("/Login");
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message || "An error occurred during registration";
    toast.dismiss();
    if (err.response?.status === 409) {
      toast.error(errorMessage, {
        action: {
          label: "Login",
          onClick: () => {
            navigate("/Login");
          },
        },
      });
    } else {
      toast.error(errorMessage);
    }
  } finally {
    setIsSubmitting(false);
  }
}
