import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: '/portfolio',
  resolve: {
    alias: {
      '@components/': '/src/components/*',
      '@pages/': '/src/pages/*',
      '@/*': '/src/*',
    },
  },
})
