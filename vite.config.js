import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "./Introduction/",
  base: "/SHiuN26.github.io/Introduction/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
});
