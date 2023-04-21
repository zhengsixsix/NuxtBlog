<template>
  <el-container class="detail">
    <el-aside class="aside">
      <el-card class="card">
        <el-header class="header">Left</el-header>
        <div v-for="item in asideList">{{ item }}</div>
      </el-card>
    </el-aside>
    <el-main class="main">
      <el-card class="card">
        <el-header class="title">This is title</el-header>
        <el-image
          style="width: 200px; height: 200px"
          :preview-src-list="[imgUrl]"
          :src="imgUrl"
          :key="imgUrl"
          fit="cover"
          lazy
        ></el-image>
      </el-card>
    </el-main>
    <el-aside class="aside">
      <el-card class="card">
        <el-header class="header">Right</el-header>
        <div v-for="item in asideList">{{ item }}</div>
      </el-card>
    </el-aside>
  </el-container>
</template>

<script setup>
  definePageMeta({
    layout: 'detail'
  });

  const imgUrl = 'https://release-1315154320.cos.ap-guangzhou.myqcloud.com/img/5e07b34a878c2ea195fe113b7ebf94bc.png';
  const asideList = ref([
    'List item 1',
    'List item 2',
    'List item 3',
    'List item 4',
  ])

</script>

<style lang="scss" scoped>
  .detail {
    background: #ecf5ff;
    height: 100%;
    padding: 10px 80px;

    .aside {
      height: 400px;
      width: 300px;
    }

    .main {
      height: 100%;
      padding: 0 20px;

      .title {
        padding: 0;
        font-size: 40px;
        font-weight: 700;
      }
    }

    .header {
      padding: 0;
    }

    .card {
      height: 100%;
    }
  }
</style>