import React from "react";
import { Layout } from "antd";
import AppNavbar from "@/layout/AppNavbar";
import AppHeader from "@/layout/AppHeader";
import AppContent from "@/layout/AppContent";
const AppLayout = () => {
  return (
    // <Layout>
    //   <AppHeader />
    //   <Layout className="overflow-auto flex-row">
    //     <AppNavbar />
    //     <AppContent />
    //   </Layout>
    // </Layout>

    <Layout hasSider>
      <AppNavbar />
      <Layout className="ml-[20vw] bg-[red]">
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
