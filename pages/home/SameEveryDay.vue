<template>
  <div class="part">
    <div class="main_title">
      一言
    </div>
    <div class="everyDay_body">
      <div class="everyDay_content_title">
        # 次元战争·红龙 #
      </div>
      <div class="everyDay_content_content">
        如果有一个喜欢你的人出现，一定不要凶她哦!
      </div>
      <div class="everyDay_content_form">
        来自 瑶瑶
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 100%;
  height: auto;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(209, 213, 219, 0.3);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px;
  margin-top: 10px;
  .main_title {
    margin-top: 5px;
    margin-left: 5px;
    color: #344449;
    font-size: 14px;
    font-weight: 600;
  }
  .everyDay_body {
    background-color: rgba(255, 255, 255, 0.1);
    width: 95%;
    height: 150px;
    margin: 10px auto;
    padding: 20px;
    position: relative;
    border-radius: 6px;
    .everyDay_content_title {
      color: #000;
      font-weight: bold;
    }
    .everyDay_content_content {
      margin-top: 10px;
      font-size: 14px;
      color: #666d7f;
    }
    .everyDay_content_form {
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
  }
}
</style>
