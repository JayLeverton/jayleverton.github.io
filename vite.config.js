import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
  },
  base: '/',
  plugins: [react()],
  server: {
    port: 5173
  }
})
