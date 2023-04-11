<template>
  <div class="box">
    <div class="moon">
      <input id="day-night" type="checkbox"><label for="day-night" />
      <div class="content">
        <div class="moon-sun" />
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
import Footer from './components/footer.vue';
import Header from './components/header.vue';
</script>
<style src="./moon.scss" scoped/>
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
