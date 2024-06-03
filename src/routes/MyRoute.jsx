import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "@/layout/AppLayout";
import Resume from "@/pages/ResumePage/Resume";
import PDF from "@/pages/PDFPage/PDF";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import { useLocation } from "react-router-dom";
const routePrefix = process.env.REACT_APP_ROUTE_PREFIX || "";

const MyRoute = () => {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  useEffect(() => {
    console.log("currentRoute", currentRoute);
  }, [currentRoute]);
  return (
    <Routes basename={routePrefix}>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Resume />} />
        <Route path="pdf" element={<PDF />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MyRoute;
