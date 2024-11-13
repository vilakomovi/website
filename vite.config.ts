import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/website',
  build: {
    chunkSizeWarningLimit: 1000, // Adjust this number as needed (in KB)
  },
})
