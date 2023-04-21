import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
export default defineNuxtPlugin((nuxtApp: any) => {
    nuxtApp.vueApp.use(VueQuillEditor)
})