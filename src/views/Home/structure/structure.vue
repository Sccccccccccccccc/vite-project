<script setup lang="ts">

import top from '../top-container/top-container.vue'
import bottom from '../bottom-container/bottom-container.vue'
import left from '../left-container/left-container.vue'
import right from '../right-container/right-container.vue'
</script>

<template>
  <div class="village-container-background-image">

    <div class="main" style="display: flex; justify-content: space-around; width: 1920px;">
      <div class="left-img">
        <left></left>
      </div>
      <div class="right-img">
        <right></right>
      </div>
    </div>

    <div class="top-img">
      <top></top>
    </div>
    <div class="bottom-img">
      <bottom></bottom>
    </div>

  </div>
</template>

<style lang="less" scoped>
.village-container-background-image {
  position: relative;
  z-index: 3;

  .left-img,
  .right-img,
  .top-img,
  .bottom-img {
    position: fixed;
    opacity: inherit;
    color: white;
  }

  .left-img,
  .right-img {
    top: 0;
    width: 418px; //阴影宽度
    height: 1080px;
    color: white;
  }

  .left-img {
    left: 0;
    background: linear-gradient(to right, rgba(12, 28, 41), rgba(12, 28, 41, 0));
  }

  .right-img {
    right: 0;
    background: linear-gradient(to left, rgba(12, 28, 41), rgba(12, 28, 41, 0));
  }

  .top-img,
  .bottom-img {
    right: 0;
    width: 1920px;
  }

  .top-img {
    top: 0;
    background: linear-gradient(to bottom, rgba(12, 28, 41), rgba(12, 28, 41, 0));
  }

  .bottom-img {
    bottom: 0;
    height: 170px;
    background: linear-gradient(to top, rgba(12, 28, 41), rgba(12, 28, 41, 0));
  }
}
</style>
