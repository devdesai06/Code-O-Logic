import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // 👈 VERY IMPORTANT
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
});
