<script setup lang="ts">
export interface IBaseMap {
  height: string
  title: string
}
const { height, title } = defineProps<IBaseMap>()
</script>

<template>
  <div class="base-map-container container-item" :style="{ height }">
    <div class="title">
      <div class="left">
        <div class="icon">
          <img src="@/assets/img/base_icon.png" alt="">
        </div>
        <div class="text">
          {{ title }}
        </div>
      </div>
      <div class="right">
        <slot name="header"></slot>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.base-map-container {
  background: rgba(59, 72, 84, 0.4);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .title {
    padding: 20px 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;
    }

    .icon {
      width: 7px;
      height: 8px;
      margin-right: 6px;
    }

    .text {
      font-size: 18px;
      font-weight: bold;
    }

  }

  .content {
    flex: 1;
  }
}
</style>
