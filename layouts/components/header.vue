<template>
  <div class="header">
    <h1>
      <img
        src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
        alt=""
      >
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
        :title="isLogin ? '登录掘金畅享更多权益' : '注册'"
        width="25%"
        center
        append-to-body
      >
        <el-form :rules="rules" label-position="top">
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="loginvalue.email" placeholder="请输入邮箱">
              <template #prepend>
                <img :src="usernameSvg" alt="" style="width: 20px">
              </template>
            </el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="loginvalue.password" placeholder="请输入密码">
              <template #prepend>
                <img :src="passwordSvg" alt="" style="width: 20px">
              </template>
            </el-input>
          </el-form-item>
          <el-form-item v-if="!isLogin" label="验证码" prop="code">
            <el-input v-model="loginvalue.code" placeholder="请输入验证码" />
          </el-form-item>
          <el-form-item>
            <el-row>
              <el-col class="setLogin">
                <span>忘记密码</span>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">
              {{ isLogin ? '登录' : '注册' }}
            </el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-dialog v-model="isVerufucation" center append-to-body width="22%">
        <verification />
      </el-dialog>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import usernameSvg from '@/assets/SVG/LoginSvg/dengluye-yonghuming.svg';
import passwordSvg from '@/assets/SVG/LoginSvg/mima.svg';
import { register, login } from '@/service/login';
const isLogin = ref(false);
const visible = ref(false);
const isVerufucation = ref(false);
const loginvalue = reactive({
  email: '',
  password: '',
  code: undefined
});
const rules = {
  email: [
    {
      required: true,
      message: '请输入用户名'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空'
    }
  ]
};
const handleLoginClick = (login: boolean) => {
  isLogin.value = login;
  visible.value = true;
};
const submitForm = async () => {
  isVerufucation.value = true;
  if (isLogin) {
    await login(loginvalue);
  } else {
    await register(loginvalue);
  }
};
const token = useCookie('token');
console.log(token);
// token.value = 789;
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
