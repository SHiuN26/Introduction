import React, { useContext, useRef, useState, useEffect } from "react";
import { Layout, theme, Button, Flex } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { GlobalContext } from "@/contexts/GlobalContext";
import { PrinterOutlined } from "@ant-design/icons";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Home from "@/pages/ResumePage/Resume";
import { TranslateContext } from "@/contexts/TranslateContext";
const AppHeader = () => {
  const { Header } = Layout;
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const { deviceType, setVisible } = useContext(GlobalContext);

  const [isPrinting, setIsPrinting] = useState(false);
  const componentRef = useRef();
  const { translate } = useContext(TranslateContext);

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
      </Flex>
    </Header>
  );
};

export default AppHeader;
