import React, { useRef, useState, useContext } from "react";
import { PrinterOutlined } from "@ant-design/icons";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Button } from "antd";
import { GlobalContext } from "@/contexts/GlobalContext";
import Resume from "@/pages/ResumePage/Resume";

const PDFButton = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const { deviceType } = useContext(GlobalContext);
  const componentRef = useRef();

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
    <>
      <div style={{ display: "none" }}>
        <Resume ref={componentRef} />
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
    </>
  );
};

export default PDFButton;
