<script setup lang="ts">

import { ref } from 'vue'
import { usePermissionStore } from '@/store/permission'
const permissionStore = usePermissionStore()

</script>

<template>
    <div class="bottom-container" @click="console.log( permissionStore.constant)"> 

    </div>
</template>

<style lang="less">
    .bottom-container{
        opacity: 0.7;
        position: fixed;
        left: 33%;
        display: flex;
        width: 34%;
        height: 54px;
        background-size: 100%;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        padding: 0px 30px 0 30px;
        background-color:rgb(31, 129, 137);
        border-radius: 14px;
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