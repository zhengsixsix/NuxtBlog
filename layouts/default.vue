<template>
  <div id="default" class="square">
    <div class="moon" v-if="background">
      <input id="day-night" type="checkbox" /><label for="day-night" />
      <div class="content">
        <div class="moon-sun" />
      </div>
    </div>
    <div class="changeBackground" v-if="!background" />
    <div class="common-layout">
      <el-header>
        <Header />
      </el-header>
      <NuxtPage />
      <el-footer>
        <Footer />
      </el-footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Footer from './components/footer.vue'
import Header from './components/header.vue'
const background = useBackground()
</script>
<style src="./moon.scss" scoped />
<style lang="scss" scoped>
@import '@/assets/style/home.scss';
#default {
  width: 100%;
  height: 100%;
  .changeBackground {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgb(80, 227, 194);
    background-image: radial-gradient(
        at 47% 33%,
        rgb(23, 181, 133) 0px,
        transparent 59%
      ),
      radial-gradient(at 82% 65%, rgb(0, 179, 255) 0px, transparent 55%);
  }
  .common-layout {
    width: 1366px;
    margin: 0 auto;
  }
}
</style>
