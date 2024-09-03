import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/requested-applicants': {
        target: 'http://localhost:8000', // Replace with your FastAPI backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
