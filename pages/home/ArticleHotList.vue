<template>
  <div class="part">
    <div class="main_title">
      文章热榜·综合
    </div>
    <div class="article_list">
      <el-row>
        <el-col :span="2" class="article_ranking">1</el-col>
        <el-col :span="17">
          <div class="article_title" title="当高启强遇到陈书婷”与TCP协议">
            当高启强遇到陈书婷”与TCP协议
          </div>
          <div class="article_detail">
            <a href="" class="article_detail_name">
              <img
                src="https://p26-passport.byteacctimg.com/img/user-avatar/ccf5b399305a43fb8c51d0ba1ee9cf31~300x300.image"
                alt=""
              >
              <span>法官</span>
            </a>
            <div class="author_text">
              8267 浏览
            </div>
            <div class="author_text">
              42 互动
            </div>
            <div class="author_text">
              18 收藏
            </div>
          </div>
        </el-col>
        <el-col :span="5" />
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
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
  .main_title {
    margin-top: 5px;
    margin-left: 5px;
    color: #344449;
    font-size: 14px;
    font-weight: 600;
  }
  .article_list {
    margin-top: 10px;
    padding-bottom: 10px;
    .article_ranking {
      background: linear-gradient(
        180deg,
        #f64242 10%,
        rgba(246, 66, 66, 0.4) 40%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-size: 25px;
      font-weight: bold;
    }
    .article_title {
      width: 100%;
      font-weight: 600;
      color: #000;
      font-size: 16px;
      line-height: 2rem;
      margin-bottom: 0.5rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .article_detail {
      display: flex;
      align-items: center;
      .article_detail_name {
        img {
          width: 1.67rem;
          height: 1.67rem;
          margin-right: 0.33rem;
          border-radius: 0.9rem;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
          font-size: 13px;
          &:hover {
            color: #1e80ff;
          }
        }
      }
      .author_text {
        color: #8a919f;
        font-size: 13px;
        &::before {
          content: '';
          margin: 0 0.33rem;
          width: 2px;
          height: 2px;
          border-radius: 1px;
          background-color: #8a919f;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
