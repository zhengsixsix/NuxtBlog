<template>
  <el-row>
    <el-col :span="24">
      <div class="part">
        <nuxt-link to="/">
          <div class="user-info">
            <div class="avater-wrapper">
              <div class="avater" />
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
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@keyframes example {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
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
        &::after {
          content: '';
          position: absolute;
          top: 3px;
          right: 3px;
          bottom: 3px;
          left: 3px;
          background: url(https://q1.qlogo.cn/g?b=qq&nk=2510186180&s=100)
            no-repeat 50%;
          background-size: 100%;
          border-radius: 12px;
          z-index: 2;
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
</style>
