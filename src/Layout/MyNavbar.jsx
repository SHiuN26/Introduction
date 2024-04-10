import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  MailOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";
const MyNavbar = () => {
  const { Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);

  const navItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: (
        <>
          <NavLink to={`/`}>home</NavLink>
        </>
      ),
    },
    {
      key: "/self",
      icon: <CalendarOutlined />,
      label: (
        <>
          <NavLink to={`/self`}>self</NavLink>
        </>
      ),
    },
  ];

  // useEffect(() => {
  //   console.log("location", location);
  //   // setCurrentRoute(location.pathname);
  // }, [location]);

  // useEffect(() => {
  //   console.log("currentRoute", currentRoute);
  // }, [currentRoute]);

  return (
    <Layout className="h-[90vh]">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
        width={"18vw"}
      >
        <Menu
          theme="light"
          mode="inline"
          items={navItems}
          selectedKeys={[currentRoute]}
          defaultSelectedKeys={[currentRoute]}
          onSelect={(e) => {
            // console.log(e);
            setCurrentRoute(e.key);
          }}
        />
      </Sider>
      <Content className="flex justify-center items-center w-full">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MyNavbar;
