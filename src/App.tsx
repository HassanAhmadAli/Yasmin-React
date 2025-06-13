import "@/index.css";
import { Toaster } from "@/components/ui/sonner";

import AppRoutes from "./routes";
import { useEffect } from "react";
import { useGlobalState } from "./globalState";
import { io } from "socket.io-client";
export default function App() {
  useEffect(() => {
    useGlobalState.getState().setIsMobile(window.innerWidth < 768);
    const handleResize = () => {
      useGlobalState.getState().setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const socket = io("ws://localhost:3009", {
      reconnectionDelayMax: 10000,
      auth: {
        token: localStorage.getItem("jwt"),
      },
      query: {
        "my-key": "my-value",
      },
    });
    useGlobalState.getState().setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}
