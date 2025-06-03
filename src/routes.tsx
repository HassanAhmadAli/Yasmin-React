import React from "react";
import "./index.css";
import { Routes, Route } from "react-router";
import { Signup } from "@/pages/signup/index";
import { Dashboard } from "@/pages/dashboard/index";

import { Login } from "@/pages/login/index";
import { Doc } from "@/pages/about/index";
import { ProductsPage } from "@/pages/products/index";
import { PostPage } from "./pages/post";
export default function Router() {
  return (
    <Routes>
      <Route index={true} element={<Dashboard />} />
      <Route path="about" element={<Doc />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="post" element={<PostPage />}></Route>
    </Routes>
  );
}
