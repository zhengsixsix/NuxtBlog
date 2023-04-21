declare const __dirname: string;
declare module 'vue-quill'
declare module '*.svg' {
  import { Component } from 'vue'
  const svgIcon: ImgHTMLAttributes
  export default svgIcon
}
declare module '@nuxt/types' {
  interface NuxtConfig {
    buildModules?: string[];
  }
}