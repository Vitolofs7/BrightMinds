import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./certs/privkey.pem'),
      cert: fs.readFileSync('./certs/fullchain.pem'),
    },
    host: '0.0.0.0',
    port: 443
  },
})
