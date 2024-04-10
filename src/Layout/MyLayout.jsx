import React from "react";
import { Layout } from "antd";
import MyNavbar from "@/Layout/MyNavbar";
import MyHeader from "@/Layout/MyHeader";
const MyLayout = () => {
  return (
    <Layout>
      <MyHeader />
      <MyNavbar />
    </Layout>
  );
};

export default MyLayout;
