<script setup lang="ts">

const title = 'CONTROLLER'

import { ref } from 'vue'

const $emit = defineEmits(['val'])

const hanlerClick = ()=>{
    console.log('$emit自定义触发事件');
    $emit('val','This is $emit')
}

</script>

<template>
    <div class="bottom-container"> 

        <div class="header-center">
            <div class="title" @click="hanlerClick">
                {{ title }}
            </div>
        </div>
        
    </div>
</template>

<style lang="less">
    .bottom-container{
        position: fixed;
        top: 50;
        display: flex;
        width: 890px;
        height: 80px;
        background-size: 100%;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 30px 17px;
        background-color:rgb(31, 129, 137);
    }

    .header-center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;

        .title {
            font-size: 40px;
            font-weight: 500;
            color: #FFFFFF;
            text-shadow: 0px 2px 8px rgba(16, 45, 79, 0.5);
        }
  }

</style>