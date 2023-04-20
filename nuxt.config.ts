import path from 'path';

export default defineNuxtConfig({
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://82.156.176.52:8084/',
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
    '@element-plus/nuxt'
  ],
  plugins: [
    '~/plugins/mavon-editor.client.ts'
  ]
});
