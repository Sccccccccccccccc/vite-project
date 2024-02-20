<script setup lang="ts">

import myMap2 from '../../components/map2/map2.vue'
import Header from '../Home/header-container/header-container.vue'


</script>

<template>
    <div style="width: 100vw; height: 100vh; margin:auto;">
        <myMap2></myMap2>
    </div>
</template>

<style scoped>
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
 