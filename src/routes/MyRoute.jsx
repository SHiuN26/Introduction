import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import Resume from "@/pages/ResumePage/Resume";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Resume />} />
        {/* <Route path="pdf" element={<PDF />} /> */}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MyRoute;
