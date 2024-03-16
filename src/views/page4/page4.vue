<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Header from '../Home/header-container/header-container.vue';

// 图片位置状态
const x = ref(-500);
const y = ref(-420);

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
        if (x.value + gifWidth >= containerWidth.value / 1.8 || x.value + gifWidth < -containerWidth.value / 1.8) {
            dx.value = -dx.value;
        }
        if (y.value + gifHeight >= containerHeight.value / 1.8 || y.value + gifHeight < -containerHeight.value / 1.8) {
            dy.value = -dy.value;
        }
        requestAnimationFrame(updatePosition);
    };
    requestAnimationFrame(updatePosition);


    const slider1 = document.getElementById('slider1');
    const slider2 = document.getElementById('slider2');
    let isDragging1 = false;
    let isDragging2 = false;
    let startOffsetX1 = 0;
    let startOffsetX2 = 0;

    const handleMouseDown = (event, isSlider1) => {
        if (isSlider1) {
            isDragging1 = true;
            startOffsetX1 = event.clientX - slider1.offsetLeft;
        } else {
            isDragging2 = true;
            startOffsetX2 = event.clientX - slider2.offsetLeft;
        }
    };

    const handleDrag = (event) => {
        if (isDragging1) {
            const offsetX = event.clientX - slider1.parentElement.offsetLeft - startOffsetX1;
            slider1.style.left = offsetX + 'px';
        }
        if (isDragging2) {
            const offsetX = event.clientX - slider2.parentElement.offsetLeft - startOffsetX2;
            slider2.style.left = offsetX + 'px';
        }
    };

    const handleMouseUp = () => {
        isDragging1 = false;
        isDragging2 = false;
    };

    document.addEventListener('mousedown', (event) => {
        if (event.target.id === 'slider1') {
            handleMouseDown(event, true);
        }
        if (event.target.id === 'slider2') {
            handleMouseDown(event, false);
        }
    });

    document.addEventListener('mousemove', handleDrag);

    document.addEventListener('mouseup', handleMouseUp);

});





</script>

<template>
    <div class="container">
        <!-- <img src="@/assets/img/sky.jpg" alt="" style="z-index: 1;">

        <div class="gif" :style="{ transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)` }" style="z-index: 2;">
            <img src="@/assets/img/littlePrincess.gif" alt="">
        </div> -->

        <div id="slideToolCtrol">
            <div id="slideToolBorder">
                <div id="slideTool" class="slideTool">
                    <div id="slideLeft" class="slideLeft">
                        <span id="slider1" class="slider1" style="cursor: pointer;">
                            <span id="value1" value="01">01</span>
                        </span>
                    </div>
                    <div id="slideRight" class="slideRight">
                        <span id="slider2" class="slider2">
                            <span id="value2" value="31">31</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="less" scoped>
#slideTool {
    width: 305px;
    height: 3px;
    position: relative;
    background-color: lightgray;
    display: inline-block;
}

#slideLeft {
    width: 0px;
    height: 3px;
    background-color: lightgray;
    position: absolute;
    z-index: 20;
}

#slideRight {
    width: 300px;
    height: 3px;
    background: #ab6969;
    position: absolute;
}

#slider1 {
    height: 15px;
    width: 15px;
    background: white;
    border: 1px solid #ab6969;
    display: block;
    border-radius: 10px;
    position: absolute;
    top: -6px;
    z-index: 20;
}

#slider2 {
    height: 15px;
    width: 15px;
    background: white;
    border: 1px solid #ab6969;
    display: block;
    border-radius: 10px;
    position: absolute;
    top: -6px;
    left: 300px;
    z-index: 20;
}

#value1 {
    margin-top: -25px;
    position: absolute;
    width: 30px;
    background-color: black;
    color: white;
    text-align: center;
    margin-left: -20px;
    border-radius: 3px;
}

#value2 {
    margin-top: -25px;
    position: absolute;
    width: 30px;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 3px;
}

#slideToolBorder {
    background-color: white;
    width: 400px;
    border: solid 1px rgb(23, 61, 118);
}

#slideTitle {
    display: inline-block;
    background-color: #ab6969;
    height: 30px;
    width: 70px;
    text-align: center;
    line-height: 30px;
    /*border-left: solid 1px brown;*/
    border-right: solid 1px brown;
}

#titleSpan {
    color: white;
}


.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
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
