import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using base './' so the build works on GitHub Pages (or any static host path)
export default defineConfig({
  plugins: [react()],
  base: './'
})
