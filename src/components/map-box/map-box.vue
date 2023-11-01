<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
interface onClose {
  title?: string
  modelValue: boolean
  onClose?: () => void
}
const { onClose } = defineProps<onClose>()
const emit = defineEmits(['update:modelValue'])
function handleClose() {
  emit('update:modelValue', false)
  onClose && onClose()
}
const mapBox = ref() as Ref<HTMLElement>
defineExpose({ mapBox })
</script>

<template>
  <transition name="map-box">
    <div class="map-box-container" ref="mapBox" v-show="modelValue">
      <div class="title">
        <div class="icon">
          <img src="@/assets/img/map_detail_icon.png" alt="">
        </div>
        {{ title }}
      </div>
      <div class="close" @click="handleClose">
        <img src="@/assets/img/close.png" alt="">
      </div>
      <div class="slide"></div>
      <el-scrollbar>
        <slot></slot>
      </el-scrollbar>
    </div>
  </transition>
</template>

<style lang="less" scoped>
.map-box-container {
  position: fixed;
  background-size: 100%;
  z-index: 3;
  right: 496px;
  top: 372px;
  width: 457px;
  height: 347px;
  padding: 75px 30px 1% 20px;
  background: url(@/assets/img/map_detail_bg.png) no-repeat center;
  background-size: cover;
  overflow: hidden;

  .title {
    position: absolute;
    left: 25px;
    top: 12px;
    font-size: 24px;
    font-family: Alibaba PuHuiTi;
    color: #FFFFFF;
    display: flex;
    align-items: center;

    .icon {
      width: 20px;
      height: 20px;
      margin-right: 15px;
    }
  }

  .close {
    position: absolute;
    top: 11px;
    right: 30px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .slide {
    position: absolute;
    left: 12px;
    top: 38px;
    width: 95%;
    height: 12px;
    background: url(@/assets/img/map_detail_title.png);
  }


}
</style>
