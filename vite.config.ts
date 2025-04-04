import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  server: {
    host: '0.0.0.0',
  },
  base: './', // Use relative paths (important if you're deploying somewhere like file:// or subdirectories)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'index.html'),
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})