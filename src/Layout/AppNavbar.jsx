import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { CalendarOutlined, HomeOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
const AppNavbar = () => {
  const { Sider } = Layout;
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

  return (
    <Sider
      collapsible={false}
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
          setCurrentRoute(e.key);
        }}
      />
    </Sider>
  );
};

export default AppNavbar;
