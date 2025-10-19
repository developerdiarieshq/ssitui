import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  // Determine base path based on environment
  const base = process.env.VITE_BASE_PATH || (mode === 'production' ? '/ssitui/' : '/')

  return {
    plugins: [vue()],
    base: base,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router'],
            bootstrap: ['bootstrap'],
            fontawesome: ['@fortawesome/fontawesome-free']
          }
        }
      }
    }
  }
})
