<template>
  <div class="header">
    <h1>
      <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg" alt="">
    </h1>
    <el-row justify="space-between">
      <el-button @click="handleLoginClick(true)">
        登录
      </el-button>
      <el-button @click="handleLoginClick(false)">
        注册
      </el-button>
    </el-row>
    <client-only>
      <el-dialog
        v-model="visible"
        :title="isLogin ? '登录' : '注册'"
        width="30%"
        center
      >
        123
      </el-dialog>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const isLogin = ref(false);
const visible = ref(false);
const handleLoginClick = (login: boolean) => {
  isLogin.value = login;
  visible.value = true;
};
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
