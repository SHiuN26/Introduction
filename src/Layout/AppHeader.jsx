import React, { useContext, useRef, useState, useEffect } from "react";
import { Layout, theme, Button, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { PrinterOutlined } from "@ant-design/icons";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Home from "@/pages/ResumePage/Resume";

const AppHeader = () => {
  const { Header } = Layout;
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const { deviceType, setVisible } = useContext(GlobalContext);

  const [isPrinting, setIsPrinting] = useState(false);
  const componentRef = useRef();

  const showDrawer = () => {
    setVisible(true);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleBeforePrint = () => {
    setIsPrinting(true);
  };

  const handleAfterPrint = () => {
    setIsPrinting(false);
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
          <Home ref={componentRef} />
        </div>
        <ReactToPrint
          trigger={() => (
            <Button
              className="flex justify-center items-center"
              onClick={() => handlePrint()}
              disabled={isPrinting}
            >
              {deviceType !== "Mobile" && "PDF"}
              <PrinterOutlined />
            </Button>
          )}
          content={() => componentRef.current}
          onBeforeGetContent={handleBeforePrint}
          onAfterPrint={handleAfterPrint}
        />
        {deviceType === "Mobile" && (
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
