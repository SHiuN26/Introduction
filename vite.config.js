import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./Introduction/",
  // base: "/Introduction/",
  // base: process.env.VITE_ROUTE_PREFIX || "/",
  // define: {
  //   "process.env": {
  //     REACT_APP_ROUTE_PREFIX: JSON.stringify(
  //       process.env.REACT_APP_ROUTE_PREFIX || ""
  //     ),
  //   },
  // },
  define: {
    "process.env": {
      VITE_ROUTE_PREFIX: JSON.stringify(process.env.VITE_ROUTE_PREFIX || ""),
    },
  },
  base: process.env.VITE_ROUTE_PREFIX || "/",

  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
});
