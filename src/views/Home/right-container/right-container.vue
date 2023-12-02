<script setup lang="ts">
import { ref } from 'vue';



      
</script>


<template>
    <div class="right-container"  >
        <dv-border-box10>

            <div id="box1" class="box1">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Eligendi, qui temporibus! 
                Velit cupiditate accusamus quidem debitis esse quos fugiat ex deleniti omnis in repudiandae suscipit, 
                eveniet deserunt possimus officiis illum.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolore praesentium voluptate consequatur error, 
                saepe ea cupiditate vel ex fuga totam in corporis odio sequi porro quo magni quos eos. Enim!
            </div>
            <div id="box1" class="box1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quam a deserunt itaque minus libero dicta unde eos quibusdam, 
                sint cupiditate alias architecto amet enim quis labore eius illo repellat odit.
            </div>
            <div id="box1" class="box1">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Beatae asperiores possimus expedita rerum tempora, 
                iusto odit culpa itaque aut aspernatur saepe mollitia dicta, 
                ipsam dolorum molestiae ipsa ut hic labore.
            </div>

        </dv-border-box10>

    </div>
</template>


<style lang="less">


.right-container {
    top: 6%;
    transition: 0.5s;
    width: 450px;
    height: 93%;
    opacity: 0.75;
    display: block;
    background: black;

    .box1 {
        padding: 23px;
        float: center;
        height: 33%;
        border-bottom: 3px solid whitesmoke;
        opacity: 0.8;
    }
    .box1:nth-last-child(1){
        border-bottom: 0px
    }
}

</style>