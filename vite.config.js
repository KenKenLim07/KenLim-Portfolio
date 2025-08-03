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
    // Enable source maps for debugging
    sourcemap: false,
    
    // Optimize chunk size
    rollupOptions: {
      output: {
        // Manual chunk splitting for better caching
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'emailjs': ['emailjs-com'],
          // UI chunks
          'ui-components': [
            './src/components/Navbar.jsx',
            './src/components/ScrollToTop.jsx',
            './src/components/ThemeToggle.jsx'
          ],
          // Section chunks
          'sections': [
            './src/components/sections/Hero.jsx',
            './src/components/sections/About.jsx',
            './src/components/sections/Projects.jsx',
            './src/components/sections/Skills.jsx',
            './src/components/sections/Contact.jsx'
          ]
        },
        // Optimize chunk naming
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    
    // Optimize CSS
    cssCodeSplit: true,
    
    // Target modern browsers for smaller bundles
    target: 'esnext'
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion'],
    exclude: ['emailjs-com'] // Exclude from pre-bundling as it's used conditionally
  },
  
  // Performance optimizations
  esbuild: {
    drop: ['console', 'debugger']
  }
});