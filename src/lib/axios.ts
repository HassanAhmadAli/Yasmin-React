import { useGlobalState } from "@/globalState";
import axios from "axios";

const axiosInstance = axios.create({
  // timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    const publicPaths = ["/api/signin", "/api/login"];

    // Skip adding auth header for public paths
    if (publicPaths.includes(config.url || "")) {
      return config;
    }

    if (
      token &&
      ["PUT", "POST", "DELETE", "PATCH", "OPTIONS"].includes(
        config.method?.toUpperCase() || "",
      )
    ) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axiosInstance };
