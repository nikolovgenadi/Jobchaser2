import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "/dist",
    rollupOptions: {
      input: {
        main: "/dist/main.js",
        preview: "/src/preview.tsx",
      },
    },
  },
});
