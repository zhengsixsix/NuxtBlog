<template>
  <div class="user">
    <header class="header" :style="{ backgroundImage: `url(${headerUrl})` }">
      <div class="title">
        <h1 class="name">
          jiech的个人博客
        </h1>
        <div class="discription">
          但行好事，莫问前程。
        </div>
      </div>
    </header>
    <el-button class="meta-btn" @click="drawer = true">
      <el-icon :size="16" color="#fff" :style="{marginRight: '3px'}">
        <More />
      </el-icon>
      <span>菜单</span>
    </el-button>
    <client-only>
      <el-drawer
        v-model="drawer"
        direction="ltr"
        :size="300"
        show-close
        title=""
        custom-class="user-menu-drawer"
      >
        <div class="user-info">
          <el-avatar :size="75" src="https://empty" class="user-info-avatar" @error="errorHandler">
            <img
              src="http://blog-1304453302.cos.ap-guangzhou.myqcloud.com/1669971749823.jpeg"
              alt="头像"
            >
          </el-avatar>
          <div class="user-info-desctiption">
            417p篇文章
          </div>
          <div class="user-info-desctiption">
            36786浏览
          </div>
          <div class="user-info-desctiption">
            19当前访客
          </div>
        </div>
        <el-divider />
        <div class="list">
          <div class="list-item" @click="handleGoToHome">
            首页
          </div>
        </div>
      </el-drawer>
    </client-only>
    <div class="article">
      <div v-for="(item, idx) in articleList" :key="idx" class="article-item">
        <h2 class="article-title">
          {{ item.title }}
        </h2>
        <div class="article-description">
          {{ item.description }}
        </div>
        <el-space class="article-context">
          <span>{{ item.updateTime }}</span>
        </el-space>
      </div>
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
});

const drawer = ref(false);
const articleList = ref([
  {
    title: '2020但行好事莫问前程',
    description: '但行好事，莫问前程。 河狭水激，人急计生。 明知山有虎，偏向虎山行。 自身要多做义举，做好当下，而不要去牵挂往后的发展。',
    updateTime: '2022-12-30'
  },
  {
    title: '2020但行好事莫问前程',
    description: '但行好事，莫问前程。 河狭水激，人急计生。 明知山有虎，偏向虎山行。 自身要多做义举，做好当下，而不要去牵挂往后的发展。',
    updateTime: '2022-12-30'
  },
  {
    title: '2020但行好事莫问前程',
    description: '但行好事，莫问前程。 河狭水激，人急计生。 明知山有虎，偏向虎山行。 自身要多做义举，做好当下，而不要去牵挂往后的发展。',
    updateTime: '2022-12-30'
  },
  {
    title: '2020但行好事莫问前程',
    description: '但行好事，莫问前程。 河狭水激，人急计生。 明知山有虎，偏向虎山行。 自身要多做义举，做好当下，而不要去牵挂往后的发展。',
    updateTime: '2022-12-30'
  }
]);
const headerUrl = ref('http://blog-1304453302.cos.ap-guangzhou.myqcloud.com/1680750216132.jpg');
const router = useRouter();
const handleGoToHome = () => router.push('/');

</script>
<style lang="scss" scoped>
.user {
  background: #f4f8fb;
  overflow-y: scroll;
  height: 100%;

  .header {
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: relative;

    .title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }

    .name {
      font-size: 50px;
      cursor: pointer;
    }

    .discription {
      font-size: 20px;
      font-weight: 400;
      margin-top: 10px;
      color: rgba(255, 255, 255, .8);
      text-align: center;
    }
  }

  .meta-btn {
    position: absolute;
    top: 20px;
    left: 20px;
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 6px 15px;
  }

  .list {
    color: rgba(255, 255, 255, .8);

    &-item {
      cursor: pointer;
    }
  }

  &-info {
    margin-bottom: 20px;

    &-avatar {
      display: block;
      margin: 0 auto 20px;
    }

    &-desctiption {
      color: #fff;
      text-align: center;
      margin-bottom: 5px;
    }
  }

  .article {
    margin: 30px auto;
    width: 900px;
    box-shadow: 8px 14px 38px rgba(39,44,49,.06), 1px 3px 8px rgba(39,44,49,.03);
    border-radius: 5px;

    &-item {
      padding: 20px;
      background-color: rgba(255,255,255,.9);
      margin-bottom: 1px;
    }

    &-title {
      font-size: 24px;
    }

    &-description {
      color: #15171a;
      font-size: 16px;
      margin: 10px 0;
    }

    &-context {
      color: #738a94;
    }
  }
}

</style>
