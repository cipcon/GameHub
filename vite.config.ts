import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GameHub/',
  server: {
    hmr: {
      overlay: false, // Dezactivează reîncărcarea automată la erori
    },
    watch: {
      ignored: ["**/*"], // Ignoră toate fișierele pentru auto-reload
    },
  },
});
