import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/pages/AppPage/App";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
