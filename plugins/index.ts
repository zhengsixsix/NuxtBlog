/*
 * @Author: 1314520zjX! 1833496831@qq.com
 * @Date: 2023-03-31 09:45:03
 * @LastEditors: 1314520zjX! 1833496831@qq.com
 * @LastEditTime: 2023-03-31 11:58:38
 * @FilePath: \blog_client\blog_client\plugins\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// plugins/index.ts
import type { NuxtApp } from '@nuxt/types';
export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    // err: 错误信息
    // context: vue 实例
    nuxtApp.vueApp.config.errorHandler = (err: Error, context: any) => {
        console.log(err, context);
    }
    // err: 错误信息
    // instance: vue 实例
    // info: 具体报错的钩子名称
    nuxtApp.hook('vue:error', (err: Error, instance: any, info: string) => {
        console.log(err, instance, info);
    });
})

