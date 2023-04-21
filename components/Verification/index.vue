<template>
  <div class="verify-slide-con">
    <div class="img-con">
      <img ref="ImgRef" :src="ImgSrc" alt="">
      <div ref="slideBlockRef" class="slide-block" />
      <div ref="slideBlockMaskRef" class="slide-block-mask" />
    </div>
    <div class="slide-con">
      <div ref="slideBtnRef" class="slide-btn">
        <!-- 滑动按钮 -->
        <i class="iconfont icon-arrow-right" />
        <!-- 图标 -->
      </div>
    </div>
    <div class="operate-con" @click="switchImg()">
      <!-- 操作容器块 -->
      <i id="refresh" class="iconfont icon-shuaxin1" />
      <!-- 刷新按钮 -->
    </div>
  </div>
</template>
<script setup lang="ts">
const loadCss = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://at.alicdn.com/t/font_1582902_u0zm91pv15i.css';
  document.head.appendChild(link);
};
loadCss();

const imgList = reactive<Array<string>>([
  'http://www.sdust.edu.cn/__local/9/7A/B1/F29B84DEF72DD329997E8172ABA_664BA3EF_32466.jpg',
  'http://www.sdust.edu.cn/__local/B/F3/E4/693AB931C9FFB84646970D53BFE_C506394A_4282CA.jpg',
  'http://www.sdust.edu.cn/__local/F/7A/AA/E1459849AA8AB0C89854A41BD41_BF3BD857_BC0D8.jpg',
  'http://www.sdust.edu.cn/__local/1/95/CB/EDC1450B8FD1B8A25FAAC726AA4_A36D4253_16C91.jpg'
]);
const ImgRef = ref<HTMLImageElement>();
const slideBlockRef = ref<HTMLDivElement>();
const slideBtnRef = ref<HTMLDivElement>();
const slideBlockMaskRef = ref<HTMLDivElement>();
let ImgDom: any = null;
let slideBlockDom: any = null;
let slideBtnDom: any = null;
let slideBlockMaskDom: any = null;
const ImgSrc = ref();
// 随机树公共函数
const randomInt = (min = 0, max = 1) => {
  return min + ~~(Math.random() * (max - min));
};
const switchImg = () => {
  slideBlockDom.style.left = '0px';
  slideBtnDom.style.left = '0px';
  const newSrc = imgList[Math.floor(Math.random() * 4)];
  ImgSrc.value = newSrc;
  if (slideBlockDom) {
    slideBlockDom.style['background-image'] = `url(${newSrc})`;
  }
  initSlider();
};
onMounted(() => {
  ImgDom = ImgRef.value;
  slideBlockDom = slideBlockRef.value;
  slideBtnDom = slideBtnRef.value;
  slideBlockMaskDom = slideBlockMaskRef.value;
  switchImg();
});

const initSlider = () => {
  if (ImgDom && slideBlockDom && slideBtnDom && slideBlockMaskDom) {
    const maxTop =
      ImgDom.offsetHeight -
      ~~window
        .getComputedStyle(slideBlockDom)
        .getPropertyValue('height')
        .replace('px', '');
    const maxRight =
      ImgDom.offsetWidth -
      ~~window
        .getComputedStyle(slideBlockDom)
        .getPropertyValue('width')
        .replace('px', '');
    const randPosY = randomInt(0, Math.abs(maxTop));
    const randPosX = randomInt(60, Math.abs(maxRight));
    slideBlockMaskDom.style.display = 'block';
    slideBlockMaskDom.style.top = `${randPosY}px`;
    slideBlockMaskDom.style.left = `${randPosX}px`;
    slideBlockDom.style.display = 'block';
    slideBlockDom.style.top = `${randPosY}px`;
    slideBlockDom.style.setProperty(
      'background-position',
      `-${randPosX}px -${randPosY}px`
    );
    slideBtnDom.onmousedown = (e: any) => {
      const edgeX = e.clientX;
      document.onmousemove = (event) => {
        const relativeX = event.clientX - edgeX;
        if (
          relativeX < 0 ||
          relativeX > ImgDom.offsetWidth - slideBtnDom.offsetWidth
        ) {
          return void 0;
        }
        slideBlockDom.style.left = relativeX + 'px'; // 移动拼图
        slideBtnDom.style.left = relativeX + 'px'; // 移动滑块按钮
      };
      document.onmouseup = function () {
        this.onmousemove = null; // 撤销事件
        this.onmouseup = null; // 撤销事件
        if (
          Math.abs(slideBlockDom.offsetLeft - slideBlockMaskDom.offsetLeft) <= 2
        ) {
          console.log('成功');
        } else {
          slideBlockDom.style.left = '0px';
          slideBtnDom.style.left = '0px';
        }
      };
    };
  }
};
</script>
<style lang="scss" scoped>
.verify-slide-con {
  /* 滑动拼图容器块 */
  width: 360px;
  padding: 10px 20px;
  border: 1px solid #eee;
}
.img-con {
  /* 图片容器块 */
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border: 1px solid #eee;
  position: relative;
}
.img-con > .slide-block {
  /* 图片区域的滑块 */
  top: 0;
  left: 0;
  position: absolute;
  height: 40px;
  width: 40px;
  display: none;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 360px 200px;
  z-index: 10;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4), 0 0 10px 0 rgba(90, 90, 90, 0.4);
}
.img-con > .slide-block-mask {
  /* 图片区域的空缺区域 */
  top: 0;
  left: 0;
  position: absolute;
  height: 40px;
  width: 40px;
  display: none;
  background-color: rgba(0, 0, 0, 0.4);
}
.img-con > .img {
  /* 图片 */
  width: 100%;
  height: 100%;
}
.img-con > .loading {
  /* 加载中样式 */
  width: unset;
  height: unset;
}
.slide-con {
  /* 滑块容器 */
  height: 40px;
  margin: 10px 0;
  position: relative;
  border: 1px solid #eee;
}
.slide-con > .slide-btn {
  /* 滑动按钮 */
  height: 40px;
  width: 40px;
  position: absolute;
  background: #4c98f7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.icon-arrow-right {
  /* 右箭头 */
  font-size: 30px;
  color: #fff;
}
.operate-con {
  /* 操作容器块 */
  border-top: 1px solid #eee;
  height: 30px;
  padding: 5px 0 0 5px;
  display: flex;
  align-items: center;
}
.icon-shuaxin1 {
  /* 刷新按钮 */
  color: #777;
  font-size: 20px;
  cursor: pointer;
}
</style>
