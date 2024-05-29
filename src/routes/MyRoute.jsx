import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import Home from "@/pages/HomePage/Home";
import PDF from "@/pages/PDFPage/PDF";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="pdf" element={<PDF />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MyRoute;
