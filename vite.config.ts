import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Root path for custom domain (not a subdirectory)
  plugins: [
    react(),
    svgr(),
    ViteImageOptimizer({
      includePublic: true, // images live in public/Images, not imported as modules
      png: { quality: 80 },
      webp: { quality: 82 },
    }),
  ],
});
