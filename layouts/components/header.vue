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
        class="header-login"
      >
        <el-form :rules="rules" label-position="top" :model="loginvalue">
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="loginvalue.email" placeholder="请输入邮箱">
              <template #prepend>
                <img :src="usernameSvg" alt="" style="width: 20px">
              </template>
            </el-input>
          </el-form-item>
          <el-form-item v-if="!isLogin" label="昵称" prop="username">
            <el-input v-model="loginvalue.username" placeholder="请输入昵称">
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
            <el-input v-model="loginvalue.code" placeholder="请输入验证码">
              <template #append>
                <el-button type="text" :disabled="isShowCode" @click="handleClick">
                  获取验证码
                </el-button>
              </template>
            </el-input>
          </el-form-item>
          <slide-verify
            v-if="isVerufucation"
            ref="block"
            :w="421"
            slider-text="向右滑动->"
            :accuracy="1"
            @again="onAgain"
            @success="onSuccess"
            @fail="onFail"
            @refresh="onRefresh"
          />
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
    </client-only>
  </div>
</template>

<script setup lang="ts">
import SlideVerify from 'vue3-slide-verify';
import 'vue3-slide-verify/dist/style.css';
import usernameSvg from '@/assets/SVG/LoginSvg/dengluye-yonghuming.svg';
import passwordSvg from '@/assets/SVG/LoginSvg/mima.svg';
import { register, login, sendMail, repeatUsername } from '@/service/login';
import type { SlideVerifyInstance } from 'vue3-slide-verify';

const isLogin = ref(false);
const visible = ref(false);
const isVerufucation = ref(false);
const loginvalue = reactive({
  email: '',
  password: '',
  code: '',
  username: ''
});
const block = ref<SlideVerifyInstance>();

const isShowCode = computed(() => {
  return !loginvalue.email;
});

const onAgain = () => {
  // 刷新
  block.value?.refresh();
};

const onSuccess = () => {
  ElMessage({
    message: '验证成功',
    type: 'success',
    duration: 2000
  });
  isVerufucation.value = false;
  const emailSplit = loginvalue.email.split('@');
  sendMail(emailSplit[0], loginvalue.email);
};

const onFail = () => {
  ElMessage({
    message: '验证失败',
    type: 'error',
    duration: 2000
  });
};

const onRefresh = () => {

};

const handleClick = () => {
  // 刷新
  block.value?.refresh();
  isVerufucation.value = true;
};
const handleLoginClick = (login: boolean) => {
  isLogin.value = login;
  visible.value = true;
};
const submitForm = async () => {
  if (isLogin.value) {
    await login(loginvalue);
  } else {
    await register(loginvalue);
  }
};
const handleEmailValidator = (_: unknown, value: string) => {
  console.log(value);
};

const handleNameValidator = async (_: unknown, name: string) => {
  await repeatUsername(name);
};

const rules = {
  email: [
    {
      required: true,
      message: '邮箱不能为空'
    },
    {
      validator: handleEmailValidator,
      trigger: 'blur'
    }
  ],
  username: [
    {
      required: true,
      message: '用户名不能为空'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空'
    }
  ]
};
</script>

<style lang="scss">
.header {
  height: 100%;
  max-width: 1336px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header-login.el-dialog {
  .el-input-group__append {
    width: 112px !important;
  }
}
</style>
