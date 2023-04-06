<style src="./app.css" />
<template>
  <input type="checkbox" id="day-night" /><label for="day-night"></label>
  <div class="content">
    <div class="moon-sun"></div>
  </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const nuxtApp = useNuxtApp()
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component)
}
</script>
