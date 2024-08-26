import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "classic",
    }),
  ],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "/dist",
    rollupOptions: {
      external: ["/node_modules/reactjsx-runtime.js"],
      input: {
        main: "/src/main.tsx",
        preview: "/src/preview.tsx",
      },
    },
  },
});
