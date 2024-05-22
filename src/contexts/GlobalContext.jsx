import React, { createContext, useState } from "react";

export const GlobalContext = createContext({
  deviceType: "Desktop",
});

export const GlobalProvider = ({ children }) => {
  const [deviceType, setDeviceType] = useState("Desktop");

  return (
    <GlobalContext.Provider
      value={{
        deviceType,
        setDeviceType,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
