<script setup lang="ts">

import { ref } from 'vue'
import { usePermissionStore } from '@/store/permission'
const permissionStore = usePermissionStore()

let selector = ref(true);
function expend() {
    selector.value = !selector.value
}

</script>

<template>
    <div class="selectorBox" :style="selector === false ? 'top:-60%' : 'top: 15%;opacity: 0;'" >
        
    </div>
</template>

<style lang="less">
.bottom-container {
    opacity: 0.8;
    position: relative;
    left: 30%;
    display: flex;
    width: 40%;
    height: 12%;
    background-size: 100%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    padding: 0px 30px 0 30px;
    border-radius: 14px;
}

.selector {
    // background-color: aquamarine;
    cursor: pointer;
    scale: 1.5;
    border-radius: 12px;
    width: 5%;
    position: relative;
    top: 6%;
    left: 91.5%;
    text-align: center;
}

.selectorBox {
    position: absolute;
    left: 89%;
    top: -60%;
    width: 10%;
    height: 55%;
    border-radius: 12px;
    transition: 0.6s;
    background-color: aquamarine;

}

.selector1 {
    // background-color: aquamarine;
    cursor: pointer;
    scale: 1.5;
    border-radius: 12px;
    width: 5%;
    position: relative;
    top: 6%;
    left: 98%;
    transform: rotate(180deg);
    text-align: center;
}

.header-center {
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;

    .title {
        font-size: 34px;
        font-weight: 500;
        color: #FFFFFF;
        text-shadow: 0px 2px 8px rgba(16, 45, 79, 0.5);
    }
}
</style>