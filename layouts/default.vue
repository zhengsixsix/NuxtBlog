<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <slot />
      </el-main>
      <el-footer><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Footer from './components/footer.vue';
import Header from './components/header.vue';
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-header {
    background: pink;
  }

  .el-footer {
    background: blue;
  }
}
</style>
