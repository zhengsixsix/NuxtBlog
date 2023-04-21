<template>
  <client-only>
    <header>
      <div class="left_box"></div>
      <input
        type="text"
        placeholder="输入文章标题..."
        maxlength="80"
        spellcheck="false"
        class="title_input"
      />
      <div class="right_box">
        <div class="status_text">文章将自动保存至草稿箱</div>
        <el-button class="xitu_btn"> 草稿箱 </el-button>
        <div class="publish_popup">
          <el-button class="xitu-btn" type="primary"> 发布 </el-button>
        </div>
        <el-tooltip
          content="切换为 富文本 编辑器"
          placement="bottom"
          effect="light"
        >
          <div class="editor_switcher">
            <div class="toggle_btn">
              <nuxt-link to="/richtext">
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
    <div class="publisharticle">
      <mavon-editor
        v-model="content"
        :ishljs="true"
        :toolbars="params"
        toolbarsBackground="#f8f9fa"
        style="height: 93vh"
      />
    </div>
  </client-only>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
})
const content = ref('')
const toolbars = {
  bold: true, // 粗体
  italic: true, // 斜体
  header: true, // 标题
  underline: true, // 下划线
  strikethrough: true, // 中划线
  mark: true, // 标记
  superscript: true, // 上角标
  subscript: true, // 下角标
  quote: true, // 引用
  ol: true, // 有序列表
  ul: true, // 无序列表
  link: true, // 链接
  imagelink: true, // 图片链接
  code: true, // code
  table: true, // 表格
  fullscreen: true, // 全屏编辑
  readmodel: true, // 沉浸式阅读
  htmlcode: true, // 展示html源码
  help: true, // 帮助
  /* 1.3.5 */
  undo: true, // 上一步
  redo: true, // 下一步
  trash: true, // 清空
  save: true, // 保存（触发events中的save事件）
  /* 1.4.2 */
  navigation: true, // 导航目录
  /* 2.1.8 */
  alignleft: true, // 左对齐
  aligncenter: true, // 居中
  alignright: true, // 右对齐
  /* 2.2.1 */
  subfield: true, // 单双栏模式
  preview: true, // 预览
}
const params = reactive(toolbars)
</script>
<style lang="scss" scoped>
header {
  height: 4.2rem;
  display: flex;
  width: 100%;
  .left_box {
    padding-right: 14px;
  }
  .right_box {
    width: 550px;
    display: flex;
    align-items: center;
    .status_text {
      margin: 0 8px;
      color: #8d96a2;
    }
    .xitu_btn {
      margin: 0 8px;
    }
    .publish_popup {
      margin: 0 8px;
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
  .title_input {
    height: 100%;
    border: none;
    outline: none;
    padding: 0 27px;
    font-size: 24px;
    flex: 1;
    color: black;
    &::-webkit-input-placeholder {
      color: #86909c;
      font-size: 24px;
      font-weight: 500;
    }
  }
}
.publisharticle {
  ::v-deep(.v-note-op) {
    border: 1px solid #e1e4e8;
    .op-icon {
      color: black !important;
    }
  }
  ::v-deep(.v-note-edit) {
    background-color: #f8f9fa !important;
    overflow-y: auto !important;
    border-right: 1px solid #e1e4e8;
    border-radius: 0;
    .content-input-wrapper {
      background-color: #f8f9fa !important;
      .auto-textarea-input {
        background-color: #f8f9fa !important;
      }
    }
  }
}
</style>
