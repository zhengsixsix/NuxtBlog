<template>
  <div class="box01">
    <div class="part info">
      <div class="main_title">网站信息</div>
      <div class="webPerformance_diary">
        <ul>
          <li class="webPerformance_diary_item">
            <div>
              <span>Dom 渲染耗时</span>
              <span>{{ performanceInfo.domEnd }} ms</span>
            </div>
          </li>
          <li class="webPerformance_diary_item">
            <div>
              <span>白屏时间</span>
              <span>{{ performanceInfo.navigationStart }} ms</span>
            </div>
          </li>
          <li class="webPerformance_diary_item">
            <div>
              <span>内存使用占比</span>
              <span>{{ performanceInfo.memory }} %</span>
            </div>
          </li>
          <li class="webPerformance_diary_item">
            <div>
              <span>Dom Ready时间</span>
              <span>{{ performanceInfo.domready }} ms</span>
            </div>
          </li>
          <li class="webPerformance_diary_item">
            <div>
              <span>onload 时间</span>
              <span>{{ performanceInfo.onload }} ms</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
interface PerformanceInfo {
  navigationStart: number
  domEnd: number
  domready: number
  onload: number
  memory: number
}

interface PerformanceMemory extends Performance {
  memory?: {
    usedJSHeapSize: number
  }
}

const defaultPerformanceInfo: PerformanceInfo = {
  navigationStart: 0,
  domEnd: 0,
  domready: 0,
  onload: 0,
  memory: 0,
}

const performanceInfo = reactive(defaultPerformanceInfo)
// 获取网站性能信息 要编程宏任务拿到最后的数据
const getPerformanceInfront = (): void => {
  if (process.client) {
    setTimeout(() => {
      const performance: PerformanceMemory = window.performance
      performanceInfo.navigationStart =
        performance.timing.domLoading - performance.timing.fetchStart
      performanceInfo.domEnd =
        performance.timing.domComplete - performance.timing.domLoading
      performanceInfo.domready =
        performance.timing.domContentLoadedEventEnd -
        performance.timing.fetchStart
      performanceInfo.onload =
        performance.timing.loadEventStart - performance.timing.fetchStart
      performanceInfo.memory = getrmb(performance?.memory?.usedJSHeapSize)
    }, 500)
  }
}
getPerformanceInfront()
const getrmb = (size: number | undefined): number => {
  if (size === undefined) {
    return 0
  }
  return Math.floor(size / 1024 / 1024)
}
</script>

<style lang="scss" scoped>
.box01 {
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
    .webPerformance_diary {
      margin-top: 10px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 6px;
      padding: 15px;
      ul {
        width: 100%;
        li {
          background: none;
          margin-top: 10px;
          div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: 0 auto;
            font-size: 14px;
            span:nth-child(2) {
              background-color: #fff;
              padding: 0 6px;
              border-radius: 3px;
              box-shadow: 0 0 6px #ccc;
              color: #000;
            }
          }
        }
      }
    }
  }
}
</style>
