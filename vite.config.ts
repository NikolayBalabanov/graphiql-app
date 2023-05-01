/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export const pathResolver = (pathStr: string) => {
  return resolve(__dirname, '.', pathStr);
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
  plugins: [react()],
});
