import { defineConfig } from 'vite'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/festinbjudan/' : '/',
    server: {
      port: 3000,
      open: true
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets'
    }
  }
})
