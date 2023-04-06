<template>
  <div class="box">
    <div class="moon">
      <input type="checkbox" id="day-night" /><label for="day-night"></label>
      <div class="content">
        <div class="moon-sun"></div>
      </div>
    </div>
    <div class="common-layout">
      <el-header>
        <Header />
      </el-header>
      <NuxtPage />
      <el-footer>
        <Footer />
      </el-footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Footer from './components/footer.vue'
import Header from './components/header.vue'
</script>

<style src="./moon.scss" />
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  .common-layout {
    width: 1366px;
    margin: 0 auto;

    // .el-container {
    //   height: 100%;
    // }

    // .el-header {
    //   background: #fff;
    // }

    // .el-main {
    //   width: 1366px;
    //   margin: 0 auto;
    // }
  }
}
</style>
