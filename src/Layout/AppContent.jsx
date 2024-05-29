import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const AppContent = () => {
  const { Content } = Layout;
  return (
    <Content className="min-h-[90vh] w-full p-4 bg-[#F0F0F0]">
      <Outlet />
    </Content>
  );
};

export default AppContent;
