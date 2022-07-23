import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  plugins: [
    react(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.html'),
      name: 'crdt-toy',
      fileName: (format) => {
        if (format === 'es') {
          return 'crdt.es.mjs';
        }

        return `crdt.${format}.js`;
      },
    },
    rollupOptions: {
      external: ['React'],
    },
  },
  // @ts-ignore
  test: {},
});