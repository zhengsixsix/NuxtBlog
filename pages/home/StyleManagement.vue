<template>
  <div class="StyleManagement">
    <div class="part model">
      <div class="mode_setting-box">
        <el-switch
          class="mb-2"
          active-text="圆角模式"
          inactive-text="方角模式"
          v-model="styleModule"
        />
      </div>
      <div class="mode_setting-box">
        <el-switch
          class="mb-2"
          active-text="默认模式"
          inactive-text="自定义背景"
          v-model="backgroundModule"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const background = useBackground()

let styleModule = ref(true)
let backgroundModule = ref(true)

watch([styleModule, backgroundModule], ([styleVal, backgroundVal]) => {
  let defaultDom: Element = document.querySelector('#default')!
  defaultDom.className = styleVal ? 'square' : 'round'
  background.value = backgroundVal
})
</script>

<style lang="scss" scoped>
@import '@/assets/style/home.scss';
.StyleManagement {
  .model {
    height: 87px;
    .mode_setting-box {
      span {
        color: #fff;
      }
    }
  }
}
</style>
