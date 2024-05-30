import React, { useContext } from "react";
import { Layout } from "antd";
import AppNavbar from "@/layout/AppNavbar";
import AppHeader from "@/layout/AppHeader";
import AppContent from "@/layout/AppContent";
import { GlobalContext } from "@/contexts/GlobalContext";
const AppLayout = () => {
  const { deviceType } = useContext(GlobalContext);
  return (
    // <Layout>
    //   <AppHeader />
    //   <Layout className="overflow-auto flex-row">
    //     <AppNavbar />
    //     <AppContent />
    //   </Layout>
    // </Layout>

    <Layout hasSider>
      {/* {deviceType !== "Mobile" && <AppNavbar />} */}
      <AppNavbar />
      <Layout
        className={`${deviceType !== "Mobile" ? "ml-[20vw]" : "ml-[0vw]"}`}
      >
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  );
};

export default AppLayout;
