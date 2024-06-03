import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/pages/AppPage/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";

import "./index.css";
import "antd/dist/reset.css";

const routePrefix = import.meta.env.VITE_ROUTE_PREFIX || "";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={routePrefix}>
      <GlobalProvider>
        <App />
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>
);
