<script setup lang="ts">

const title = 'TITLE'

</script>

<template>
    <div class="top-container"> 

        <div class="header-center">
            <div class="title">
                {{ title }}
            </div>
        </div>
        
    </div>
</template>

<style lang="less">
    .top-container{
        position: fixed;
        top: 0;
        display: flex;
        width: 1920px;
        height: 80px;
        background: url(@/assets/img/img_top_title.png) no-repeat center;
        background-size: 100%;
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 30px 17px;
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