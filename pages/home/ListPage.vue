<template>
  <div class="ListPage">
    <el-row>
      <el-col :span="24">
        <div class="part menu">
          <el-row :gutter="10">
            <el-col :span="19">
              <div class="article">
                <div class="list_title">
                  这是文章标题
                </div>
                <div class="list_introduction">
                  这是文章简介
                </div>
                <div class="list_label">
                  <el-check-tag checked style="margin-right: 8px">
                    这是文章标签
                  </el-check-tag>
                  <el-check-tag checked style="margin-right: 8px">
                    这是文章标签
                  </el-check-tag>
                  <el-check-tag checked style="margin-right: 8px">
                    这是文章标签
                  </el-check-tag>
                </div>
                <div class="article_details">
                  <div class="article_thumbs">
                    点赞
                  </div>
                  <div class="article_comment">
                    评论
                  </div>
                  <div class="article_follow">
                    关注
                  </div>
                  <div class="article_time">
                    发布时间
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="list_picture">
                <img
                  src="https://q1.qlogo.cn/g?b=qq&nk=2510186180&s=100"
                  alt=""
                >
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '@/assets/style/home.scss';
.ListPage {
  .menu {
    .article {
      display: flex;
      flex-direction: column;
      padding-left: 20px;

      .list_title {
        font-size: 26px;
        font-weight: bold;
        color: #000;
      }

      .list_introduction {
        font-size: 14px;
        color: #9b9b9b;
        margin-top: 10px;
      }

      .list_label {
        margin-top: 10px;
      }

      .article_details {
        display: flex;
        justify-content: space-between;
        color: #9b9b9b;
        width: 40%;
        cursor: pointer;
        margin-top: 10px;
        font-size: 14px;
      }
    }

    .list_picture {
      text-align: center;
      transform: translateY(15%);

      img {
        border-radius: 5px;
      }
    }
  }
}
</style>
