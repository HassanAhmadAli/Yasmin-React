import "./index.css";
import { Routes, Route } from "react-router";
import { Signup } from "@/pages/signup/index";
import { Dashboard } from "@/pages/customerProfiles/index";
import { Login } from "@/pages/login/index";
import { AboutPage } from "@/pages/about/index";
import { ProductsPage } from "@/pages/products/index";
import { Page404 } from "./pages/404";
import { PostsPage } from "./pages/posts";
import { SinglePostPage } from "./pages/post";
import { ProfilePage } from "./pages/profile";

export default function Router() {
  return (
    <Routes>
      <Route path="customers" element={<Dashboard />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="posts" element={<PostsPage />}></Route>
      <Route index element={<PostsPage />}></Route>
      <Route path="post/:id" element={<SinglePostPage />}></Route>
      <Route path="*" element={<Page404 />}></Route>
      <Route path="favorites" element={<Page404 />}></Route>
      <Route path="profile" element={<ProfilePage />}></Route>
    </Routes>
  );
}
