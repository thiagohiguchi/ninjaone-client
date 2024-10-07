import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ninjaone-client/', // Replace with your GitHub repository name
  optimizeDeps: {
    include: ['i18next-http-backend'],
  },
})
