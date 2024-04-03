<script setup lang="ts">

import { useScreenAdaptation } from '@/hook/useScreenAdaptation'
import Header from '@/views/Home/header-container/header-container.vue'
import structure from '@/views/Home/structure/structure.vue'
import router from './router';
import { onBeforeMount, onMounted } from 'vue'

useScreenAdaptation()

let _beforeUnload_time = 0, _gap_time = 0;
window.onunload = function () {
  _gap_time = new Date().getTime() - _beforeUnload_time;
  if (_gap_time <= 5) {
    // 刷新时onbeforeunload与onunload的时间差一般都远大于5
    // 浏览器关闭
    localStorage.setItem("currenScreenId", '1');
  } else {
    // 浏览器刷新
  }
}
window.onbeforeunload = function () {
  // 刷新或关闭页面都会执行，且先于onunload执行
  _beforeUnload_time = new Date().getTime();
};

</script>

<template>
  <Header></Header>
  <structure> </structure>
  <router-view v-slot="{ Component }">
    <transition name="slide">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>
