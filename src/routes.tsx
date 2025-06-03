import React from "react";
import "./index.css";
import { Routes, Route } from "react-router";
import { Signup } from "@/pages/signup/index";
import { Dashboard } from "@/pages/dashboard/index";

import { Login } from "@/pages/login/index";
import { Doc } from "@/pages/about/index";
import { ProductsPage } from "@/pages/products/index";
import { PostPage } from "./pages/post";
import { Page404 } from "./pages/404";
import { AuthProvider } from "./authContext";

export default function Router() {
  return (
    <AuthProvider>
      <Routes>
        <Route index={true} element={<Dashboard />} />
        <Route path="about" element={<Doc />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="post" element={<PostPage />}></Route>
        <Route path="*" element={<Page404 />}></Route>
        <Route path="favorites" element={<Page404 />}></Route>
        <Route path="profile" element={<Page404 />}></Route>
      </Routes>
    </AuthProvider>
  );
}
