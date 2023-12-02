<script setup lang="ts">

const title = 'TITLE'

</script>

<template>
    <div class="header-container">



        <div class="header-center">
            <div class="title">
                {{ title }}
            </div>
        </div>


        <div class="header-left" style=" margin-left:15%">
            <div class="header-nav">
                <!-- <div class="header-nav-item " :class="nav.id==currenScreenId?'activeNav':''" v-for="nav in navRight" :key="nav.id" @click="handleNav(nav)">{{nav.name}}</div> -->
                <div class="header-nav-item">page1</div>
                <div class="header-nav-item">page2</div>
                <div class="header-nav-item">page3</div>
            </div>

        </div>

        <div class="header-right" style=" margin-right:15%">
            <div class="header-nav">
                <!-- <div class="header-nav-item " :class="nav.id==currenScreenId?'activeNav':''" v-for="nav in navRight" :key="nav.id" @click="handleNav(nav)">{{nav.name}}</div> -->
                <div class="header-nav-item">page4</div>
                <div class="header-nav-item">page5</div>
                <div class="header-nav-item">page6</div>
            </div>
            <div class="full_screen" @click="useScreenFull" style=" position:fixed; right:3%">
                <div class="icon">
                    <img src="@/assets/img/icon_full_screen.png" alt="">
                </div>
                <div>全屏</div>
            </div>
        </div>

    </div>
</template>

<style lang="less">
.header-left {
    display: flex;
    // opacity: 0.7;
    align-items: center;
}

.header-container {
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

.header-right {
    display: flex;
    align-items: center;
    // opacity: 0.7;
    cursor: pointer;

    .full_screen {
        display: flex;
        align-items: center;
        opacity: 0.7;

        .icon {
            width: 20px;
            height: 20px;
            margin-right: 10px;
        }
    }

}

.header-nav {
    display: flex;
    // opacity: 0.7;
    align-content: center;
    font-size: 20px;

    .header-nav-item {
        cursor: pointer;
        padding: 0 20px;
        border-right: 1px solid;
        font-weight: 500;
        opacity: 0.7;

        &:last-child {
            border-right: 0px solid;
        }

    }

    .header-nav-item:hover {
        opacity: 1;
        // font-family: Alibaba PuHuiTi;
        font-weight: 500;
        color: #FFFFFF;
        text-shadow: 0px 2px 8px #73A7FF;
    }

    .activeNav {
        opacity: 1;
        // font-family: Alibaba PuHuiTi;
        font-weight: 500;
        color: #FFFFFF;
        text-shadow: 0px 2px 8px #73A7FF;
    }

}
</style>