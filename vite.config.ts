import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // base: "/vite-deploy",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "src/main.tsx",
        preview: "src/preview.tsx",
      },
    },
  },
});
