<script setup lang="ts"></script>

<template>
  <div class="village-container-background-image">
    <div class="left-img" >left</div>
    <div class="right-img">right</div>
    <div class="top-img">top</div>
    <div class="bottom-img">bottom</div>
  </div>
</template>

<style lang="less" scoped>
.village-container-background-image {
  position: relative;
  z-index: 1;
  
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
    width: 518px;
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
    height: 203px;
    background: linear-gradient(to bottom, rgba(12, 28, 41), rgba(12, 28, 41, 0));
  }

  .bottom-img {
    bottom: 0;
    height: 170px;
    background: linear-gradient(to top, rgba(12, 28, 41), rgba(12, 28, 41, 0));
  }
}
</style>
