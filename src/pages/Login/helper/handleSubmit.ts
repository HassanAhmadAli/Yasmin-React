import { axiosInstance as axios } from "@/lib/axios";
import { toast } from "sonner";
import { useLoginStore as useLoginStore } from "../state";
import { useGlobalState } from "@/globalState";

export async function handleSubmit(
  formEvent: React.FormEvent<HTMLFormElement>,
  navigate: (path: string) => void,
) {
  formEvent.preventDefault();
  const setIsSubmitting = useLoginStore.getState().setIsSubmitting;
  setIsSubmitting(true);

  const formData = new FormData(formEvent.currentTarget);
  const email: string = formData.get("email")! as string;
  const userData = {
    email,
    password: formData.get("password"),
  };
  const p1 = axios.post("/api/login", userData);
  toast.loading("logging in...");
  try {
    const response = await p1;
    toast.dismiss();
    if (response.status > 300 || response.status < 200) {
      throw new Error("login failed. Please try again.");
    }
    toast.success("logged in successfully");
    useGlobalState.getState().setUser(response.data.user);
    useGlobalState.getState().setJwt(response.data.token)
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
