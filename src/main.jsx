import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/pages/AppPage/App";
import { BrowserRouter } from "react-router-dom";
import { GlobalProvider } from "./contexts/GlobalContext";
import { TranslateProvider } from "./contexts/TranslateContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import "antd/dist/reset.css";
import "./i18n";

const routePrefix = process.env.REACT_APP_ROUTE_PREFIX || "";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter basename={routePrefix}>
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <TranslateProvider>
          <App />
        </TranslateProvider>
      </GlobalProvider>
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
