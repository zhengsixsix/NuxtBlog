/*
 * @Author: 1314520zjX! 1833496831@qq.com
 * @Date: 2023-04-04 10:08:28
 * @LastEditors: 1314520zjX! 1833496831@qq.com
 * @LastEditTime: 2023-04-04 16:12:54
 * @FilePath: \blog\nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import path from 'path'
import { defineNuxtConfig } from 'nuxt/config'

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
    '@element-plus/nuxt'
  ],
})
