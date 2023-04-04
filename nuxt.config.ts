import path from 'path';

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
  css: ['@/assets/style/reset.css', '@/assets/style/default.scss', 'element-plus/dist/index.css', '@/assets/style/user.scss'],
  alias: {
    '@': path.resolve(__dirname)
  },
  modules: [
    '@vueuse/nuxt',
    '@element-plus/nuxt'
  ]
});
