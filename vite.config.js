import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteCompression from "vite-plugin-compression";

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      // Options
      verbose: true, // Log compressed files
      disable: false, // Enable compression in development mode
      threshold: 10240, // Minimum file size for compression (in bytes)
      algorithm: "gzip", // Compression algorithm ('gzip', 'brotliCompress', etc.)
      ext: ".gz", // File extension for compressed files
    }),
  ],
});
