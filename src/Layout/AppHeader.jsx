import React from "react";
import { Layout, theme } from "antd";
const AppHeader = () => {
  const { Header } = Layout;
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Header
      className="w-full h-[10vh] flex justify-center items-center text-white text-2xl"
      style={{
        padding: 0,
        background: colorPrimary,
      }}
    >
      Lin's Introduce
    </Header>
  );
};

export default AppHeader;
