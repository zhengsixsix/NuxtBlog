const path = require('path')
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
        '@': path.resolve(__dirname),
    },
    modules: [
        '@vueuse/nuxt',
        '@element-plus/nuxt',

    ],
    elementPlus: {
        css: true
    }
})

