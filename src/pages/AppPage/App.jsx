import React from "react";
import { ConfigProvider } from "antd";
import MyRoute from "@/routes/MyRoute";

const App = () => {
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
