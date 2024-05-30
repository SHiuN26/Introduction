import React, { createContext, useState } from "react";

export const GlobalContext = createContext({
  deviceType: "Desktop",
});

export const GlobalProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState("Desktop");
  const [visible, setVisible] = useState(false);
  return (
    <GlobalContext.Provider
      value={{
        deviceType,
        setDeviceType,
        visible,
        setVisible,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
