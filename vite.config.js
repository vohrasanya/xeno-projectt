import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  '/api': 'http://localhost:5000',
  '/vendor': 'http://localhost:5000'
})
