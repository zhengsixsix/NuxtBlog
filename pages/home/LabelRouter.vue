<!--
 * @Author: 1314520zjX! 1833496831@qq.com
 * @Date: 2023-04-06 17:15:39
 * @LastEditors: 1314520zjX! 1833496831@qq.com
 * @LastEditTime: 2023-04-06 18:31:08
 * @FilePath: \blog\pages\home\LabelRouter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="LabelRouter">
    <div class="part menu">
      <div class="main-title">
        导航栏
      </div>
      <div class="nav-list">
        <div
          v-for="(item) of navList"
          :key="item.id"
          :class="
            item.activeShow ? 'nav-list-wrapper active' : 'nav-list-wrapper'
          "
          @click="changeStyle(item)"
        >
          <div class="title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NavList {
  id: number,
  route: string,
  icon: string,
  title: string,
  activeShow: boolean
}
const navList = reactive<Array<NavList>>([
  {
    id: 0,
    route: '/',
    icon: 'iconfont icon-shouye',
    title: '首页',
    activeShow: true
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
]);
const changeStyle = (item: NavList) => {
  navList.forEach((element) => { element.activeShow = element.id === item.id; });
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/home.scss';

.LabelRouter {
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
        backdrop-filter: blur(3px) saturate(180%);
        -webkit-backdrop-filter: blur(3px) saturate(180%);
        border-radius: 6px;
        border: 1px solid rgba(255, 255, 255, 0.125);
        margin: 5px 0;

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
}
</style>
