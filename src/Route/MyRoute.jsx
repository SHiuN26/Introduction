import React from "react";
import { Routes, Route } from "react-router-dom";
import MyLayout from "@/Layout/MyLayout";
import Home from "@/pages/HomePage/Home";
import Self from "@/pages/SelfPage/Self";
const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MyLayout />}>
        <Route index element={<Home />} />
        <Route path="/self" element={<Self />} />
      </Route>
    </Routes>
  );
};

export default MyRoute;
