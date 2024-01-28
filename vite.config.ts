import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    target: ["es2022", "edge89", "firefox89", "chrome89", "safari15"],
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "esnext", //https://github.com/mrdoob/three.js/issues/26626
    },
  },
});
