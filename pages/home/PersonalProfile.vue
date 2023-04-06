<!--
 * @Author: 1314520zjX! 1833496831@qq.com
 * @Date: 2023-04-06 17:15:39
 * @LastEditors: 1314520zjX! 1833496831@qq.com
 * @LastEditTime: 2023-04-06 18:49:11
 * @FilePath: \blog\pages\home\PersonalProfile.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="PersonalProfile">
    <div class="part">
      <nuxt-link to="/user">
        <div class="user-info">
          <div class="avater-wrapper">
            <div class="avater">
              <img
                src="https://q1.qlogo.cn/g?b=qq&nk=2510186180&s=100"
                alt=""
              >
            </div>
            <div class="info">
              <div class="nickname">
                20savage
              </div>
              <div class="description">
                强的不是我,是我的20岁
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/style/home.scss';
@keyframes example {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.PersonalProfile {
  .part {
    .user-info {
      display: flex;
      position: relative;
      flex-direction: column;
      padding: 10px 10px 0;
      .avater-wrapper {
        display: flex;
        flex-direction: column;
        .avater {
          display: flex;
          width: 120px;
          position: relative;
          height: 120px;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 20px;
          &::before {
            content: '';
            position: absolute;
            width: 75px;
            height: 135%;
            background: linear-gradient(135deg, #f54ea2, #ff7676);
            animation: example 4s linear infinite;
          }
          img {
            border-radius: 12px;
            z-index: 999;
            width: 95%;
          }
        }
        .info {
          .nickname {
            font-size: 16px;
            font-weight: 700;
            background: linear-gradient(135deg, #5b247a, #1bcedf);
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .description {
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }
}
</style>
