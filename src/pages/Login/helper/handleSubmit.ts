import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";

export async function handleSubmit(
  formEvent: React.FormEvent<HTMLFormElement>,
  setIsSubmitting: (val: boolean) => void,
  navigate: (path: string) => void,
) {
  formEvent.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(formEvent.currentTarget);
  const userData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const p1 = axiosInstance.post("/api/login", userData);
  toast.loading("logging in...");
  try {
    const response = await p1;
    toast.dismiss();
    if (response.status > 300 || response.status < 200) {
      throw new Error("login failed. Please try again.");
    }
    toast.success("logged in successfully");
    localStorage.setItem("token", response.data.token);

    navigate("/");
  } catch (err: any) {
    const errorMessage =
      err.response?.data?.message || "An error occurred during Authentication";
    toast.dismiss();
    toast.error(errorMessage);
    console.error(err);
  } finally {
    setIsSubmitting(false);
  }
}
