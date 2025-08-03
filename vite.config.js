import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/KenLim-Portfolio",
  server: {
    host: true,
    port: 5173
  },
  build: {
    // Simple, reliable build configuration for portfolio
    sourcemap: false,
    
    // Basic chunk splitting - let Vite handle it automatically
    rollupOptions: {
      output: {
        // Simple chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // Use esbuild for faster builds (simpler than terser)
    minify: 'esbuild',
    
    // Keep CSS simple
    cssCodeSplit: false,
    
    // Target modern browsers
    target: 'esnext'
  },
  
  // Simple dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion']
  }
});