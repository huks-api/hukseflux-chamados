import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // Define a raiz como a pasta atual (frontend)
  build: {
    outDir: 'dist', // Saída padrão
    sourcemap: true
  },
  server: {
    port: 3000
  },
  preview: {
    port: 4173
  }
})