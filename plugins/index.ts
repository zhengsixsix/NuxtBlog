import { ComponentPublicInstance } from '@vue/runtime-core/dist/runtime-core';
import { NuxtApp, defineNuxtPlugin } from 'nuxt/app';

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  // err: 错误信息
  // context: vue 实例
  nuxtApp.vueApp.config.errorHandler = (err: unknown, context: ComponentPublicInstance<any>) => {
    console.error(err, context);
  };
  // err: 错误信息
  // instance: vue 实例
  // info: 具体报错的钩子名称
  nuxtApp.hook('vue:error', (err: unknown, instance: ComponentPublicInstance<any>, info: string) => {
    console.error(err, instance, info);
  });
});
