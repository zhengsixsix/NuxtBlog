<template>
  <div class="home">
    <el-row :gutter="20" justify="center">
      <el-col :span="5">
        <PersonalProfile />
        <LabelRouter />
        <StyleManagement />
      </el-col>
      <el-col :span="12">
        <ListPage />
      </el-col>
      <el-col :span="7">
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
