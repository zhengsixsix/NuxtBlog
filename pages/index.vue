<!--
 * @Author: 1314520zjX! 1833496831@qq.com
 * @Date: 2023-04-04 10:08:28
 * @LastEditors: 1314520zjX! 1833496831@qq.com
 * @LastEditTime: 2023-04-06 11:36:28
 * @FilePath: \blog\pages\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="home">
    <el-row :gutter="20" justify="center">
      <el-col :span="4">
        <PersonalProfile />
        <LabelRouter />
        <StyleManagement />
      </el-col>
      <el-col :span="12">
        <ListPage />
      </el-col>
      <el-col :span="6">
        <ArticleHotList />
        <SameEveryDay />
        <WebsPerformance />
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import ArticleHotList from './home/ArticleHotList.vue';
import LabelRouter from './home/LabelRouter.vue';
import ListPage from './home/ListPage.vue';
import PersonalProfile from './home/PersonalProfile.vue';
import SameEveryDay from './home/SameEveryDay.vue';
import StyleManagement from './home/StyleManagement.vue';
import WebsPerformance from './home/WebsPerformance.vue';
</script>

<style lang="scss" scoped>
.home {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
