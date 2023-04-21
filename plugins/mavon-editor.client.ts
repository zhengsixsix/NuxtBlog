import MavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.use(MavonEditor)
});