import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
        // this is set to allow for CORS requests
        configure: (proxy) => {
          proxy.on("proxyReq", (proxyReq) => {
            proxyReq.setHeader("Access-Control-Allow-Origin", "*");
            proxyReq.setHeader(
              "Access-Control-Allow-Methods",
              "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            );
            proxyReq.setHeader(
              "Access-Control-Allow-Headers",
              "Content-Type, Authorization",
            );
          });
        },
      },
    },
  },
});
