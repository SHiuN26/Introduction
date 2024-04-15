import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const AppContent = () => {
  const { Content } = Layout;
  return (
    <Content className="w-full p-4 overflow-auto">
      <Outlet />
    </Content>
  );
};

export default AppContent;
