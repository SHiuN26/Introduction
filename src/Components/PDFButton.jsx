import React, { useRef, useState, useContext } from "react";
import { PrinterOutlined } from "@ant-design/icons";
import { useReactToPrint } from "react-to-print";
import { Button } from "antd";
import { GlobalContext } from "@/contexts/GlobalContext";
import Resume from "@/pages/ResumePage/Resume";

const PDFButton = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  const { deviceType } = useContext(GlobalContext);
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforePrint: () => {
      setIsPrinting(true);
      console.log("Before print: setting isPrinting to true");
    },
    onAfterPrint: () => {
      setIsPrinting(false);
      console.log("After print: setting isPrinting to false");
    },
    onPrintError: () => {
      setIsPrinting(false);
      console.log("Print error: setting isPrinting to false");
    },
  });

  return (
    <>
      <div style={{ display: "none" }}>
        <Resume ref={componentRef} />
      </div>
      <Button
        disabled={isPrinting}
        className="flex justify-center items-center"
        onClick={() =>
          // setIsPrinting(true);
          handlePrint()
        }
        aria-label="print_button"
      >
        {deviceType !== "Mobile" && "PDF"}
        <PrinterOutlined />
      </Button>
    </>
  );
};

export default PDFButton;
