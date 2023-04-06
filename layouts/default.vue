<!--
 * @Author: 1314520zjX! 1833496831@qq.com
 * @Date: 2023-04-06 17:15:39
 * @LastEditors: 1314520zjX! 1833496831@qq.com
 * @LastEditTime: 2023-04-06 17:34:46
 * @FilePath: \blog\layouts\default.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header height="70px">
        <Header />
      </el-header>
      <el-main>
        <div class="moon">
          <input type="checkbox" id="day-night" /><label
            for="day-night"
          ></label>
          <div class="content">
            <div class="moon-sun"></div>
          </div>
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
import Footer from './components/footer.vue'
import Header from './components/header.vue'
</script>

<style src="./moon.scss" />
<style lang="scss" scoped>
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
