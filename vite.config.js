import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VERCEL ? "/" : "/KenLim-Portfolio",
  server: {
    host: true,
    port: 5173
  }
});