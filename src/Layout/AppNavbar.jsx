import React, { useState, useContext } from "react";
import { Layout, Menu, Drawer, Divider, Flex } from "antd";
import { HomeOutlined, CalendarOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "@/contexts/GlobalContext";
import LangSelect from "@/components/LangSelect";
import { TranslateContext } from "@/contexts/TranslateContext";

const AppNavbar = () => {
  const { Sider } = Layout;
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const { deviceType, visible, setVisible } = useContext(GlobalContext);
  const { translate } = useContext(TranslateContext);

  const onClose = () => {
    setVisible(false);
  };

  const navItems = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: (
        <>
          <NavLink to={`/`}>{translate("navbar.resume")}</NavLink>
        </>
      ),
    },
    {
      key: "/todo",
      icon: <CalendarOutlined />,
      label: (
        <>
          <NavLink to={`/todo`}>Todo List</NavLink>
        </>
      ),
    },
  ];

  // const todo = ["I18N", "MockTesting"];

  return deviceType !== "Mobile" ? (
    <Sider
      theme="light"
      width={"20vw"}
      collapsedWidth="0"
      breakpoint="md"
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Flex vertical>
        <LangSelect />
        <Divider className="m-0" />

        <Menu
          style={{ borderRight: "none" }}
          theme="light"
          mode="inline"
          items={navItems}
          selectedKeys={[currentRoute]}
          defaultSelectedKeys={[currentRoute]}
          onSelect={(e) => {
            setCurrentRoute(e.key);
          }}
        />

        {/* {todo.map((item) => {
          return <div key={item}>{item}</div>;
        })} */}
      </Flex>
    </Sider>
  ) : (
    <>
      <Drawer
        title={<LangSelect />}
        placement="left"
        onClose={onClose}
        open={visible}
        width={"75vw"}
      >
        <Menu
          items={navItems}
          selectedKeys={[currentRoute]}
          defaultSelectedKeys={[currentRoute]}
          onSelect={(e) => {
            setCurrentRoute(e.key);
          }}
        />
      </Drawer>
    </>
  );
};

export default AppNavbar;
