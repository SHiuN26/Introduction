// import { defineConfig } from "vite"
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   // base: process.env.REACT_APP_ROUTE_PREFIX || "/Introduction/",
//   base: process.env.REACT_APP_ROUTE_PREFIX || "/",
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src/"),
//     },
//   },
// });

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载相应模式的环境变量
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./setupTests.js",
    },
    base: env.REACT_APP_ROUTE_PREFIX || "/Introduction/",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
    define: {
      "process.env.REACT_APP_ROUTE_PREFIX": JSON.stringify(
        env.REACT_APP_ROUTE_PREFIX || "/Introduction/"
      ),
    },
  };
});
