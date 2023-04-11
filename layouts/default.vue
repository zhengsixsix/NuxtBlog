<template>
  <div class="common-layout">
    <el-container>
      <el-header height="70px">
        <Header />
      </el-header>
      <div class="main">
        <input id="day-night" type="checkbox"><label for="day-night" />
        <div class="content">
          <div class="moon-sun" />
        </div>
        <slot />
      </div>
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

  .main {
    width: 1336px;
    margin: 0 auto;
  }
}
</style>
