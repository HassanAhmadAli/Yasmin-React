import "@/index.css";
import { Toaster } from "@/components/ui/sonner";

import AppRoutes from "./routes";
import { useEffect } from "react";
import { useGlobalState } from "./globalState";
export default function App() {
  useEffect(() => {
    useGlobalState.getState().setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      useGlobalState.getState().setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}
