import React, { useState } from "react";
import { Button } from "antd";
const PPP = () => {
  const [isPrinting, setIsPrinting] = useState(false);

  const handleClick = () => {
    setIsPrinting(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, Math.random() * 5000);
    }).then(() => {
      setIsPrinting(false);
    });
  };

  return (
    <div>
      <Button disabled={isPrinting} onClick={handleClick}>
        PPP
      </Button>
    </div>
  );
};

export default PPP;
