<script setup lang="ts">

import Header from '../header-container/header-container.vue'
import top from '../top-container/top-container.vue'
import bottom from '../bottom-container/bottom-container.vue'
import left from '../left-container/left-container.vue'
import right from '../right-container/right-container.vue'
import { ref ,toRefs,watch } from 'vue';
import { usePermissionStore } from '@/store/permission'
const permissionStore = usePermissionStore()

let rightFlag = toRefs(permissionStore.constant)
// function close() {
//   rightFlag.value = !rightFlag.value
//   console.log(rightFlag.value);
// }

// watch(
//   [ ],
//   ()=>{
//     console.log("changed");
    
//   }
// )

</script>

<template>
  <div class="village-container-background-image">
    <div class="main" style="display: flex; justify-content: space-around; width: 1920px;">

      <div class="left-img">
        <left :style="permissionStore.constant == true ? ' left:-54%;' : ''"></left>
      </div>

      <div class="right-img">
        <right :style="permissionStore.constant == true ? ' right:-54%' : ''"></right>
      </div>
    </div>

    <div class="header-img">
      <Header> </Header>
    </div>

    <div class="top-img" :style="permissionStore.constant == true ? ' top:-10%' : 'top: 8%'"> 
      <top> </top>
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
    top: 83%;
    right: 0;
    width: 43%;
    left: 28%;
  }

  .top-img {

    left: calc(50% - 800px/2);
    border-radius: 12px;
    width: 800px;
    height: 100px;
    transition: 0.7s;
    display: flex; 

  }

  .bottom-img {
    bottom: 0;
    height: 170px;
    background: linear-gradient(to top, rgba(12, 28, 41), rgba(12, 28, 41, 0));
  }
}
</style>
