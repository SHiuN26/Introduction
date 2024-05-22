import React, { useEffect, useContext } from "react";
import { ConfigProvider } from "antd";
import MyRoute from "@/routes/MyRoute";
import { GlobalContext } from "@/contexts/GlobalContext";

const App = () => {
  const { deviceType, setDeviceType } = useContext(GlobalContext);
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setDeviceType("Mobile");
    } else if (window.innerWidth <= 1024) {
      setDeviceType("LapTop");
    } else {
      setDeviceType("Desktop");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("deviceType =>", deviceType);
  }, [deviceType]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff9900",
          colorInfo: "#ffa516",
          colorError: "#ff4d80",
        },
      }}
    >
      <MyRoute />
    </ConfigProvider>
  );
};

export default App;
