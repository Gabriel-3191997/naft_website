import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // allows access from LAN
    port: 5173, // specify port
  },
  base: './',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
