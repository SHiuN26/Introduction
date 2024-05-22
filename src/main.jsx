import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/pages/AppPage/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";

import "./index.css";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
