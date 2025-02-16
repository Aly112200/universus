import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  base: '/', // Setarea pentru domeniu
  build: {
    rollupOptions: {
      external: ['bootstrap'], // Evită problema de rezolvare a importului bootstrap
    },
  },
});
