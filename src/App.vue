<script setup lang="ts">

import { useScreenAdaptation } from '@/hook/useScreenAdaptation'
import Header from '@/views/Home/header-container/header-container.vue'
import structure from '@/views/Home/structure/structure.vue'
useScreenAdaptation()

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

<style scoped>
</style>
