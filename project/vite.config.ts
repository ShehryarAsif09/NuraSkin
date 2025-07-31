import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

// Custom plugin to copy _redirects file to dist/
const copyRedirects = () => ({
  name: 'copy-redirects',
  closeBundle() {
    copyFileSync(resolve(__dirname, 'src/_redirects'), resolve(__dirname, 'dist/_redirects'))
  }
})

export default defineConfig({
  plugins: [react(), copyRedirects()]
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
