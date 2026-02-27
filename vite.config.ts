import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Viktig: base må settes til repo-navnet for GitHub Pages
export default defineConfig({
  base: '/smartrader-frontend/',
  plugins: [react()],
})
