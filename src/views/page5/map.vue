<script setup lang="ts">

import myMap from '../../components/echartsMap/map_3D.vue'
</script>

<template>

    <div class="box" id="map-container">
        <myMap></myMap>

        
    </div>

</template>

<style lang="less">


#map-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .population-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .population {
      background: url(@/assets/img/population.png);
      width: 120px;
      height: 26px;
      text-align: center;
      line-height: 26px;
      font-family: Arial;
      font-weight: bold;
    }
  }
}
</style>
 