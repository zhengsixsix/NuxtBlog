import path from 'path';

export default defineNuxtConfig({
  css: ['@/assets/style/reset.css', '@/assets/style/default.scss', 'element-plus/dist/index.css', '@/assets/style/user.scss'],
  alias: {
    '@': path.resolve(__dirname)
  },
  modules: [
    '@element-plus/nuxt'
  ],
  plugins: [
    '~/plugins/mavon-editor.client.ts'
  ],
  serverDir: './server'
});
