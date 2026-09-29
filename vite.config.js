import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Sitemap from "vite-plugin-sitemap";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    Sitemap({
      hostname: "https://www.carrieresnomades.com",
      exclude: ["/index.html", "/index"],
      dynamicRoutes: [
        "/carrieres-nomades",
        "/blue-mind",
        "/pricing",
        "/agency",
        "/our-philosophy",
        "/partners",
        "/contact",
        "/legal-notice",
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  ssr: {
    noExternal: ["oh-vue-icons"],
  },
  build: {
    modulePreload: false,
  },
  ssgOptions: {
    dirStyle: "nested",
    mockUnhead: true,
  },
});
