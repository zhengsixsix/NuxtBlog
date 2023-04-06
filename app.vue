<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const nuxtApp = useNuxtApp();
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  nuxtApp.vueApp.component(key, component);
}
</script>
