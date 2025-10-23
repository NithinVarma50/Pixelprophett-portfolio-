import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Optimize dev server performance
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react({
      // Enable SWC optimizations for better performance
      jsxRuntime: 'automatic'
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize build for better performance - Vercel compatible
    target: 'es2020',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Optimize chunk splitting - simplified for Vercel
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
            if (id.includes('framer-motion')) {
              return 'framer';
            }
            if (id.includes('@radix-ui')) {
              return 'ui';
            }
            return 'vendor';
          }
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    // Pre-bundle dependencies for faster dev startup
    include: [
      'react',
      'react-dom',
      'framer-motion'
    ]
  }
}));
