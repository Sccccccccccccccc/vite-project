<script setup lang="ts">

import structure from '../Home/structure/structure.vue'
import AMap from '../Home/map/map.vue'
import myMap from '@/views/map2/map2.vue'
import myMap3D from '@/views/map/map.vue'
</script>

<template>
  <div class="home">
    <div class=" container ">
      <structure> </structure>
      <AMap></AMap>
      <myMap3D></myMap3D>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  width: 1920px;
  height: 1080px;

  .container {
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, #091e36 0%, #0e2f54 50%, #081a2e 100%);
    background: rgba(0, 0, 0, .3);
    // background:rgba(0, 0, 0, 0.9);
    // opacity: .2; 

    &.dv-loading {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 99999;
    }

    .loading {
      font-weight: 700;
      margin-top: 10px;
    }
  }
}
</style>
 