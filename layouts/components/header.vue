<template>
  <div class="header">
    <h1>
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
        alt=""
      />
    </h1>
    <el-row justify="space-between">
      <el-button @click="handleLoginClick(true)"> 登录 </el-button>
      <el-button @click="handleLoginClick(false)"> 注册 </el-button>
    </el-row>
    <client-only>
      <el-dialog
        v-model="visible"
        :title="isLogin ? '登录掘金畅享更多权益' : '注册'"
        width="30%"
        center
        append-to-body
      >
        <el-form v-model="loginvalue" label-width="90px" :rules="rules">
          <el-form-item label="用户名：" prop="username">
            <el-input />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm"> 登录 </el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </client-only>
  </div>
</template>

<script setup lang="ts">
const isLogin = ref(false)
const visible = ref(false)
const loginvalue = reactive({})
const rules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
}
const handleLoginClick = (login: boolean) => {
  isLogin.value = login
  visible.value = true
}
const submitForm = () => {
  console.log(loginvalue)
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  max-width: 1336px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
