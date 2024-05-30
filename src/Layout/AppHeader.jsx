import React, { useContext } from "react";
import { Layout, theme, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
const AppHeader = () => {
  const { Header } = Layout;
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const { deviceType, setVisible } = useContext(GlobalContext);

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <Header
      className="w-full h-[10vh] flex justify-center items-center text-white text-2xl"
      style={{
        padding: 0,
        background: colorPrimary,
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      {deviceType === "Mobile" && (
        <Button
          className="absolute top-[0] left-[0] h-[10vh] bg-[#e68a00] z-[2]"
          type="primary"
          onClick={showDrawer}
        >
          <MenuOutlined />
        </Button>
      )}
      Louis Lin's Introduce
    </Header>
  );
};

export default AppHeader;
