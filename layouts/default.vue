<!--
 * @Author: 1314520zjX! 1833496831@qq.com
 * @Date: 2023-04-06 17:15:39
 * @LastEditors: 1314520zjX! 1833496831@qq.com
 * @LastEditTime: 2023-04-06 17:23:58
 * @FilePath: \blog\layouts\default.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="box">
    <div class="common-layout">
      <Header />
      <NuxtPage />
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Footer from './components/footer.vue';
import Header from './components/header.vue';
</script>

<style src="./moon.scss" />
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  background: red;
  .common-layout {
    width: 1366px;
    margin: 0 auto;
  }
}

// .common-layout {
//   width: 100%;
//   height: 100%;

//   .el-container {
//     height: 100%;
//   }

//   .el-header {
//     background: #fff;
//   }

//   .el-main {
//     width: 1200px;
//     margin: 0 auto;
//   }
// }
</style>
