import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      // vaic-backend listens on 3000 via `npm run start:dev`, or 3020 when
      // run through docker-compose (APP_PORT). Adjust if yours differs.
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
