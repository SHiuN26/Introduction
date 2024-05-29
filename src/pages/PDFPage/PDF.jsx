import React, { useRef } from "react";
import { Button } from "antd";
import { useReactToPrint } from "react-to-print";
import Home from "@/pages/HomePage/Home";
import "./print.css";
const PDF = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    onBeforeGetContent: () => {
      // 确保在打印之前设置CSS样式
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 500);
      });
    },
  });

  return (
    <div className="w-full h-full">
      <Button onClick={() => handlePrint()}>Click to Print PDF</Button>
      <div className="hidden-print p-5" ref={componentRef}>
        <Home />
      </div>
    </div>
  );
};

export default PDF;
