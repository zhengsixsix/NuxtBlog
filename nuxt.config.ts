import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'
import eslint from 'vite-plugin-eslint'

export default defineNuxtConfig({
  nitro: {
    devProxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: ['@/assets/style/reset.css', '@/assets/style/default.scss'],
  alias: {
    '@': path.resolve(__dirname)
  },
  modules: [
    '@vueuse/nuxt',
    '@element-plus/nuxt'
  ],
  vite: {
    plugins: [eslint()]
  }
})
