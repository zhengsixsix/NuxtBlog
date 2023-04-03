<template>
  <div class="home">
    <el-row>
      <el-aside>
        <el-col :span="6">
          <PersonalProfile />
          <LabelRouter />
          <StyleManagement />
        </el-col>
      </el-aside>
      <el-main>
        <el-col :span="12">
          <ListPage />
        </el-col>
      </el-main>
      <el-col :span="6" />
    </el-row>
  </div>
</template>
<script setup lang="ts">
import LabelRouter from './home/LabelRouter.vue'
import ListPage from './home/ListPage.vue'
import PersonalProfile from './home/PersonalProfile.vue'
import StyleManagement from './home/StyleManagement.vue'
</script>

<style lang="scss" scoped>
.home {
  max-width: 1600px;
  margin: 0 auto;
}
</style>
