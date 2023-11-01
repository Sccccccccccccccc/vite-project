<script setup lang="ts">
import router from '../../router';
import myMap from '../../components/echartsMap/map_3D.vue'

function fn() {
    router.push('/myMap2')
}
</script>

<template>

    <div class="map" @click="fn()"> Map </div>
    <div class="box" style="height: 100%; width: 100%;">
        <myMap></myMap>
    </div>

</template>

<style scoped>
.map {
    width: 100%;
    height: 45px;
    background: rgb(209, 94, 94);
}
</style>
 