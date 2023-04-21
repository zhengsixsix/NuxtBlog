<template>
  <client-only>
    <header>
      <div class="header_content">
        <div class="logo"></div>
        <div></div>
        <el-button> 草稿箱 </el-button>
        <div class="publish_popup"><el-button type="primary">发布</el-button></div>
        <el-tooltip
          content="切换为 Markdown 编辑器"
          placement="bottom"
          effect="light"
        >
          <div class="editor_switcher">
            <div class="toggle_btn">
              <nuxt-link to="/publisharticle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.7998 9.6001L19.1998 9.6001L15.1998 5.6001"
                    stroke="#86909C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M19.1997 14.3999L4.79971 14.3999L8.79971 18.3999"
                    stroke="#86909C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </nuxt-link>
            </div>
          </div>
        </el-tooltip>

        <div class="navigator">
          <div class="toggle_btn"></div>
        </div>
      </div>
    </header>
    <div style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        mode="default"
      />
      <Editor
        style="height: calc(88vh + 5px); overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        mode="default"
        @onCreated="handleCreated"
      />
    </div>
  </client-only>
</template>
<script setup lang="ts">
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { DomEditor } from '@wangeditor/editor'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
definePageMeta({ layout: false })

const editorRef = shallowRef()
// 内容 HTML
const valueHtml = ref('<p>hello</p>')
const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' }
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
</script>
<style lang="scss" scoped>
header {
  height: 4.2rem;
  display: flex;
  align-items: center;
  width: 100%;
  .header_content {
    display: flex;
    width: 80rem;
    margin: 0 auto;
    align-items: center;

    .logo {
      margin: 0 auto 0 0;
      position: relative;
      width: 2.5rem;
      height: 2.5rem;
      background: 50% no-repeat;
      background-size: contain;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAjVBMVEUAAADAx8/O0d3Ax8/Fy9TW6//Ax8/Ax8/ByNHFzNXAx8/BydLHzNnAx8/Ax8/Ax8/Ax8/Ax8/Ax8/ByNDCydLBydLDytPAxs/Ax8/Bx8/Ax9DByNDI1NjBx8/ByNDBydHAx8/Ax8/Ax8/Ax9DBx8/ByNDCydHAxs/Ax8/Ax8/Ax8/AyNDAyM/Ax8+/xs5Sz1QlAAAALnRSTlMA+wfvGAPm8zoS2h4O9+DIwpl4aTMtJNSikXBGC11MQOq2r4V/UinNu6piV4zQ37a4wwAAAiFJREFUWMPtmN1yskAMhgOKioBUFAXFItXa/9z/5X0OfmEosRt2JgedKc8ZjOyuyZs3ARgYGPhLuHnmgiLjB8SXANSYTfDKaA9KrByscRKd8GXY8BQqrBdji22oE0Bi9KiS4rg530ZJhEuseStAL8+UYz0lkgq1GAfwuwhdMVM+WHCZx4FkF4s19OZ5ingsJbVHB+jJ+WYFO9Eucg/68I5IQpbsYtdXxsZSC14Q2X+QZGwwg/0Ib0xKK8v/zxk6JHT8eAwWeDmtWIXf9PlE95e2TeswxRvztK1PvBG9gzUpPTz9aOuzhkRth19hDenN+6TrVx9EivzCA3mmFR7G1/Vf6erE9bxZ+p0bWxw9A+OxkchsvaAI3P/dPGXaurvzlkQcUY4uwDh3N0qcH2NTvGGNoTOHFYUCiA9T9nYONjiJQQ3RQbhJlEe8wqYbdpj0fgXkLneDGGvY/NWWUuV3A+s0EvmhMWeuoeZPnsFFZnc8MnJWgitxNl8Gn1vPRN/kFI0TZ26fAYU5u0EiX534m3w7Eb2aK8SgpWMpzW7GjblvB3JoeJXxerTy7UPHBwyOsYJerBfMq5mn2fh220s/PVZsp5brCvCnuKP5FdvLjNCPUkM0BC7bVsfk+UrBGt7TXdb9BQT1svnEnn2rvphXiQiT26rxjY3OqyiRFUovy3RS3bfRSan1waGZMVXwctmrrKdPqhgt0jnVtBa+DwMDA3r8A41Ik44EoNuxAAAAAElFTkSuQmCC);
    }
    .publish_popup {
      padding: 0 1.2rem;
    }
    .editor_switcher {
      .toggle_btn {
        cursor: pointer;
        &:hover svg {
          background-color: #eee;
        }
      }
    }
    .navigator {
      padding: 0 1.2rem;
      .toggle_btn {
        background-image: url(https://p3-passport.byteimg.com/img/user-avatar/ed7ccd7b7aa35700f9ff3b20b44edc15~64x64.awebp);
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: #eee;
        background-position: 50%;
        background-size: cover;
        cursor: pointer;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
