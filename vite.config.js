import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ninjaone-client/', // Replace with your GitHub repository name
  plugins: [react()],
  optimizeDeps: {
    include: ['i18next-http-backend'],
  },
})
