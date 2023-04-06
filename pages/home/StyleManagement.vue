<template>
  <div class="StyleManagement">
    <div class="part model">
      <div class="mode_setting-box">
        <el-switch
          class="mb-2"
          active-text="圆角模式"
          inactive-text="方角模式"
        />
      </div>
      <div class="mode_setting-box">
        <el-switch
          class="mb-2"
          active-text="白天模式"
          inactive-text="夜晚模式"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
