import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["@monorepo-facetec/facetec"],
  },
  plugins: [react()],
})
