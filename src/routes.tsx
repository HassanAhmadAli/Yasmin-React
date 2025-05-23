import React from "react";
import "./index.css";
import { Routes, Route } from "react-router";
import { Signup } from "@/pages/Signup/index";
import { Dashboard } from "@/pages/Dashboard/index";

import { Login } from "@/pages/Login/index";
import { Doc } from "@/pages/about/index";

export default function Router() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<Doc />} />
    </Routes>
  );
}
