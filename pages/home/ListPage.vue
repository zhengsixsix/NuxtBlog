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
                    <img
                      :src="
                        params.isArticleLiked
                          ? articleThumbsTrue
                          : articleThumbsFalse
                      "
                      alt=""
                      @click="handleToggle('isArticleLiked')"
                    >
                    <span>1234</span>
                  </div>
                  <div class="article_comment">
                    <img :src="articleComment" alt="">
                    <span>1234</span>
                  </div>
                  <div class="article_follow">
                    <img
                      :src="
                        params.isArticleFollowed
                          ? articleFollowTrue
                          : articleFollowFalse
                      "
                      alt=""
                      @click="handleToggle('isArticleFollowed')"
                    >
                    <span>1234</span>
                  </div>
                  <div class="article_time">
                    <img :src="articleTime" alt="">
                    <span>2022-03-04</span>
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

<script setup lang="ts">
import { reactive } from 'vue';
import articleTime from '@/assets/SVG/HomeTableSvg/anfabushijian.svg';
import articleThumbsFalse from '@/assets/SVG/HomeTableSvg/dianzan.svg';
import articleThumbsTrue from '@/assets/SVG/HomeTableSvg/dianzan_1.svg';
import articleFollowFalse from '@/assets/SVG/HomeTableSvg/guanzhu-weiguanzhu.svg';
import articleFollowTrue from '@/assets/SVG/HomeTableSvg/guanzhu-yiguanzhu.svg';
import articleComment from '@/assets/SVG/HomeTableSvg/pinglun.svg';

const params = reactive({
  isArticleLiked: false,
  isArticleFollowed: false
});
const handleToggle = (type: keyof typeof params) => {
  params[type] = !params[type];
};
</script>

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
        cursor: pointer;
        margin-top: 10px;
        font-size: 14px;
        width: 70%;
        .article_thumbs {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
        }
        .article_comment {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
        }
        .article_follow {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
        }
        .article_time {
          display: flex;
          align-items: center;
          img {
            width: 25px;
          }
        }
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
