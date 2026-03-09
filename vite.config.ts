import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
  },
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/users.json': 'http://localhost:3000'
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
