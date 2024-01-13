<script setup lang="ts">

import structure from '../Home/structure/structure.vue'
import AMap from '../Home/map/map.vue'
import leafletMap from '@/components/map/leafletMap.vue'
</script>

<template>
  <div class="home">

    <div class=" container ">
      <structure> </structure>
      <leafletMap></leafletMap>
    </div>

  </div>
</template>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
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
 