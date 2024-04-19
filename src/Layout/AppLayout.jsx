import React from "react";
import { Layout } from "antd";
import AppNavbar from "@/Layout/AppNavbar";
import AppHeader from "@/Layout/AppHeader";
import AppContent from "./AppContent";
const AppLayout = () => {
  return (
    <Layout>
      <AppHeader />
      <Layout className="overflow-auto flex-row">
        <AppNavbar />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
