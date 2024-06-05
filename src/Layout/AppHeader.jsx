import React, { useContext, useRef } from "react";
import { Layout, theme, Button, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { PrinterOutlined } from "@ant-design/icons";
import { useReactToPrint } from "react-to-print";
import Home from "@/pages/ResumePage/Resume";

const AppHeader = () => {
  const { Header } = Layout;
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const { deviceType, setVisible } = useContext(GlobalContext);

  const componentRef = useRef();

  const showDrawer = () => {
    setVisible(true);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleOnBeforeGetContent = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500); // 延迟500毫秒，确保iframe内容完全加载
    });
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
      Resume
      <Flex
        className={`${
          deviceType !== "Mobile" && "px-[1rem]"
        } pl-[10px] absolute top-[0] right-[0] h-[10vh] text-xl`}
        justify="flex-end"
        align="center"
        gap="small"
      >
        <div style={{ display: "none" }}>
          <Home
            ref={componentRef}
            onBeforeGetContent={handleOnBeforeGetContent}
          />
        </div>
        <Button
          className="flex justify-center items-center"
          onClick={() => handlePrint()}
        >
          {deviceType !== "Mobile" && "PDF"}
          <PrinterOutlined className="" />
        </Button>
        {deviceType === "Mobile" && (
          // <Button
          //   className="absolute top-[0] right-[0] h-[10vh] bg-[#e68a00] z-[2]"
          //   type="primary"
          //   onClick={showDrawer}
          // >
          //   <MenuOutlined />
          // </Button>
          <Button
            className="flex justify-center items-center bg-[#e68a00] z-[2] h-[10vh]"
            type="primary"
            onClick={showDrawer}
          >
            <MenuOutlined />
          </Button>
        )}
      </Flex>
    </Header>
  );
};

export default AppHeader;
