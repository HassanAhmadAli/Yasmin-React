import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
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
        target: "http://localhost:3009",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
