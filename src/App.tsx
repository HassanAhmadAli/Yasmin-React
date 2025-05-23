import React from "react";
import "@/index.css";
import { Toaster } from "@/components/ui/sonner";

import AppRoutes from "./routes";
export default function App() {
  return (
    <>
      <AppRoutes />
      <Toaster />
    </>
  );
}
