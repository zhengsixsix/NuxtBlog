<template>
  <el-row>
    <el-col :span="24">
      <div class="part model">
        <div class="mode_setting-box">
          <el-switch
            class="mb-2"
            active-text="圆角模式"
            inactive-text="方角模式"
          />
        </div>
        <div class="mode_setting-box">
          <el-switch
            class="mb-2"
            active-text="白天模式"
            inactive-text="夜晚模式"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 100%;
  height: 87px;
  border-radius: 7px;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 10px 5px;
  margin-top: 10px;
}
.model {
  .mode_setting-box {
    span {
      color: #fff;
    }
  }
}
</style>
