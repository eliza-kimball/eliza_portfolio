import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// Convert import.meta.url to a path
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const root = __dirname
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'), // Root index.html
        advising: resolve(root, 'src/cs_advising.html'), // Corrected path
        weather: resolve(root, 'src/weather.html'), // Corrected path
      }
    }
  }
})