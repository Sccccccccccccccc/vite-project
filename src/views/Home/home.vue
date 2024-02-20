<script setup lang="ts">

import structure from '../Home/structure/structure.vue'
import AMap from '../Home/map/map.vue'
import leafletMap from '@/components/map/leafletMap.vue'
</script>

<template>
  <div class="home">

    <div class=" container ">
      <!-- <structure> </structure> -->
      <leafletMap></leafletMap>
    </div>

  </div>
</template>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  width: 1920px;
  height: 1080px;
  transition: all 0.75s ease-out;

  .container {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #091e36 0%, #0e2f54 50%, #081a2e 100%);
    background: rgba(0, 0, 0, .3);
    position: absolute;
    // right: -100%;

  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.75s ease-out;
}
.slide-enter-to {
  position: absolute;
  right: 0;
}
.slide-enter-from {
  position: absolute;
  right: -100%;
}
.slide-leave-to {
  position: absolute;
  left: -100%;
}
.slide-leave-from {
  position: absolute;
  left: 0;
}
</style>
 