<style src="./moon.css" />
<template>
  <div class="common-layout">
    <el-container>
      <el-header height="70px">
        <Header />
      </el-header>
      <el-main>
        <input type="checkbox" id="day-night" /><label for="day-night"></label>
        <div class="content">
          <div class="moon-sun"></div>
        </div>
        <slot />
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-header {
    background: #fff;
  }

  .el-footer {
  }
}
</style>
