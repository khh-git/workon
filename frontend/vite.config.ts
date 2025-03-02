import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills({
      include: ["path"],
    }),
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@lib": "/src/lib",
      "@root-css": path.resolve(__dirname, "src/index.css"),
      "@contexts": "/src/contexts",
    },
  },
});
