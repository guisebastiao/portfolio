import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
      },
    }),
    ,
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src/"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          framer: ["framer-motion"],
          pdf: ["react-pdf", "pdfjs-dist"],
          form: ["react-hook-form", "@hookform/resolvers", "zod"],
          ui: ["@radix-ui/react-dialog", "sonner", "lucide-react"],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    host: true,
  },
});
