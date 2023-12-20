<script setup lang="ts">
import { onMounted, reactive } from 'vue';

const config1 = reactive({
    number: [Math.random() * 100],
    content: '{nt}',
})

const changeConfig = () => {
    setInterval(() => {
        config1.number[0] += Math.random() * 100
        // console.log("changed");
    }, 3000)
}

onMounted(() => {
    changeConfig();
})
</script>

<template>  
    <div class="box" @click="console.log('box1')">
        <dv-border-box10>
            <!-- http://crender.jiaminghi.com/guide/ -->
            <dv-digital-flop :config="config1" style="width: 100%; height: 110%;" />
        </dv-border-box10>
    </div>
    <div class="box" @click="console.log('box2')">
        <dv-border-box10>
            <!-- http://crender.jiaminghi.com/guide/ -->
            <dv-digital-flop :config="config1" style="width: 100%; height: 110%;" />
        </dv-border-box10>
    </div>
    <div class="box" @click="console.log('box3')">
        <dv-border-box10>
            <!-- http://crender.jiaminghi.com/guide/ -->
            <dv-digital-flop :config="config1" style="width: 100%; height: 110%;" />
        </dv-border-box10>
    </div>
</template>

<style lang="less" scoped>
.box {
    background: linear-gradient(to bottom, rgba(12, 28, 41), rgba(12, 28, 41, 0));
    display: inline-block;

    width: 33.33%;
    height: 100%;
    text-align: center;
    border-radius: 12px;
    margin: 0 10px 0 10px;
}

.box:hover {
    background-color: rgb(61, 113, 156);
    opacity: 0.7;
}
</style>