<template>
  <el-row>
    <el-col :span="24">
      <div class="part menu">
        <div class="main-title">
          导航栏
        </div>
        <div class="nav-list">
          <div
            v-for="(item, index) of navList"
            :key="index"
            :class="
              item.activeShow ? 'nav-list-wrapper active' : 'nav-list-wrapper'
            "
            @click="changeStyle(item, index)"
          >
            <div class="title">
              {{ item.title }}
            </div>
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const navList = reactive([
  {
    id: 0,
    route: '/',
    icon: 'iconfont icon-shouye',
    title: '首页',
    activeShow: false
  },
  {
    id: 1,
    route: '/about',
    icon: 'iconfont icon-guanyu',
    title: '关于',
    activeShow: false
  },
  {
    id: 2,
    route: '/time',
    icon: 'iconfont icon-shujushiguangjiCDP',
    title: '时光鸡',
    activeShow: false
  },
  {
    id: 3,
    route: '/music',
    icon: 'iconfont icon-vynil',
    title: '音乐',
    activeShow: false
  },
  {
    id: 4,
    route: '/firend',
    icon: 'iconfont icon-lianjie',
    title: '友链',
    activeShow: false
  },
  {
    id: 5,
    route: '/message',
    icon: 'iconfont icon-huiyizhongxin-liuyanqiang',
    title: '留言墙',
    activeShow: false
  },
  {
    id: 6,
    route: '/background',
    icon: 'iconfont icon-houtaiguanli-houtaiguanli',
    title: '后台',
    activeShow: false
  }
])
const changeStyle = (item: any, index: any) => {
  console.log(item, index)
}
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 7px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: 10px;

  .main-title {
    margin-top: 5px;
    margin-left: 5px;
    color: #344449;
    font-size: 14px;
    font-weight: 600;
  }
}
.menu {
  .nav-list {
    display: flex;
    flex-direction: column;
    .nav-list-wrapper {
      display: flex;
      cursor: pointer;
      align-items: center;
      .iconfont {
        margin-left: 15px;
        font-family: 'iconfont' !important;
        font-size: 20px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        transition: all 0.2s;
      }
      .title {
        height: 35px;
        line-height: 35px;
        transition: all 0.2s;
        width: 100%;
        margin-left: 10px;
      }
    }
    .active {
      background-color: #ccc;
      border-radius: 20px;
      .iconfont {
        font-size: 24px;
        transition: all 0.2s;
      }
      .title {
        font-size: 18px;
      }
    }
  }
}
</style>
