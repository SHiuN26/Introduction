import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
const MyContent = () => {
  const { Content } = Layout;
  return (
    // <Layout>
    //   <Content>
    <Outlet />
    //   </Content>
    // </Layout>
  );
};

export default MyContent;
