<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Header from '../Home/header-container/header-container.vue';

// 图片位置状态
const x = ref(10);
const y = ref(10);

// 移动速度和方向
const dx = ref(3);
const dy = ref(3);

// 容器尺寸
const containerWidth = ref(0);
const containerHeight = ref(0);

// GIF图片尺寸
const gifWidth = 63;
const gifHeight = 63;
const rotation = ref(0); // 旋转角度

onMounted(() => {
    const container = document.querySelector('.container') as HTMLElement;
    containerWidth.value = container.offsetWidth;
    containerHeight.value = container.offsetHeight;
    console.log(containerWidth.value, containerHeight.value);

    // 更新位置的函数
    const updatePosition = () => {
        x.value += dx.value;
        y.value += dy.value;

        // 根据移动方向设置旋转角度
        if (dx.value > 0 && dy.value > 0) {
            rotation.value = 90; // 向右下方移动时旋转90度
        } //向左下方移动时旋转90度
        else if (dx.value < 0 && dy.value > 0) {
            rotation.value = -180; // 向左下方移动时旋转-90度
        }
        // 向左上方移动时旋转-45度
        else if (dx.value < 0 && dy.value < 0) {
            rotation.value = -90;
        }
        else {
            rotation.value = 0; // 其他方向不旋转
        }

        // 达到容器边界时反转方向
        if ( x.value + gifWidth >= containerWidth.value / 1.8 || x.value + gifWidth < -containerWidth.value / 2.2) {
            dx.value = -dx.value;
        }
        if ( y.value + gifHeight >= containerHeight.value / 1.8 || y.value + gifHeight < -containerHeight.value / 2.5) {
            dy.value = -dy.value;
        }
        requestAnimationFrame(updatePosition);
    };

    requestAnimationFrame(updatePosition);
});
</script>

<template>
    <Header></Header>

    <div class="container">
        <img src="@/assets/img/sky.jpg" alt="" style="z-index: 1;">

        <div class="gif" :style="{ transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)` }" style="z-index: 2;">
            <img src="@/assets/img/littlePrincess.gif" alt="" >
        </div>

    </div>
</template>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: fixed;

    /* 防止滚动条出现 */
    .gif {
        width: 63px;
        height: 63px;
        // text-align: center;
        position: absolute;
        /* 使用绝对定位允许移动 */

    }
}
</style>
