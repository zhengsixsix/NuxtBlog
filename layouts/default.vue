<template>
  <div class="common-layout">
    <input id="day-night" type="checkbox"><label for="day-night" />
    <div class="content">
      <div class="moon-sun" />
    </div>
    <el-container>
      <el-header height="70px">
        <Header />
      </el-header>
      <el-main>
        <slot />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Footer from './components/footer.vue';
import Header from './components/header.vue';
</script>

<style lang="scss" scoped>
@import './moon.scss';
.common-layout {
  width: 100%;
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-header {
    background: #fff;
  }

  .el-main {
    width: 1200px;
    margin: 0 auto;
  }
}
</style>
