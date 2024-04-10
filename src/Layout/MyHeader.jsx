import React from "react";
import { Layout, theme } from "antd";
const MyHeader = () => {
  const { Header } = Layout;
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        className="w-full h-[10vh] flex justify-center items-center text-white text-2xl"
        style={{
          padding: 0,
          background: colorPrimary,
        }}
      >
        這是網頁的頭
      </Header>
    </Layout>
  );
};

export default MyHeader;
