import React, { useContext } from "react";
import { Layout, theme, Button, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { TranslateContext } from "@/contexts/TranslateContext";
import PDFButton from "@/components/PDFButton";
const AppHeader = () => {
  const { Header } = Layout;

  const {
    token: { colorPrimary },
  } = theme.useToken();
  const { deviceType, setVisible } = useContext(GlobalContext);

  const { translate } = useContext(TranslateContext);

  const showDrawer = () => {
    setVisible(true);
  };

  return (
    <Header
      className="rounded-md w-full h-[10vh] flex justify-center items-center text-white text-2xl font-Alfa "
      style={{
        padding: 0,
        background: colorPrimary,
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      {translate("navbar.resume")}
      <Flex
        className={`${
          deviceType !== "Mobile" && "px-[1rem]"
        } pr-[10px] absolute top-[0] left-[0] h-[10vh] text-xl w-full`}
        justify={deviceType === "Mobile" ? "space-between" : "flex-end"}
        align="center"
        gap="small"
      >
        {deviceType === "Mobile" && (
          <Button
            className="flex justify-center items-center bg-[#e68a00] z-[2] h-[10vh]"
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
        )}
        <PDFButton />
      </Flex>
    </Header>
  );
};

export default AppHeader;
