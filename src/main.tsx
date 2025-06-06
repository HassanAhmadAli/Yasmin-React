// src/index
import { scan } from "react-scan";
import React, { StrictMode } from "react";
// using react-scan to highlite the parts of the UI that need optimization
scan({
  enabled: true,
});
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "@/App.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
