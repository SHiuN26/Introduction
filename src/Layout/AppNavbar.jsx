import React, { useState, useContext } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "@/contexts/GlobalContext";
const AppNavbar = () => {
  const { Sider } = Layout;
  // const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const { deviceType } = useContext(GlobalContext);
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
    // {
    //   key: "/self",
    //   icon: <CalendarOutlined />,
    //   label: (
    //     <>
    //       <NavLink to={`/self`}>self</NavLink>
    //     </>
    //   ),
    // },
  ];

  const todo = ["RWD", "PDF", "I18N", "MockTesting"];

  return deviceType !== "Mobile" ? (
    <Sider
      // collapsible={false}
      // collapsed={collapsed}
      // onCollapse={(value) => setCollapsed(value)}

      // trigger={
      //   deviceType !== "Mobile" ? (
      //     <Button type="primary" onClick={toggleCollapsed}>
      //       <MenuOutlined />
      //     </Button>
      //   ) : null
      // }

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
      {todo.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </Sider>
  ) : (
    <>
      <Button
        className="absolute top-[0] left-[0] h-[10vh] bg-[#e68a00]"
        type="primary"
        onClick={showDrawer}
      >
        <MenuOutlined />
      </Button>
      <Drawer placement="left" onClose={onClose} open={visible} width={"75vw"}>
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
