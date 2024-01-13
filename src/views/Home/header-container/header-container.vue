<script setup lang="ts">


import useScreenFull from '@/hook/useScreenfull'
import router from '@/router';
import { usePermissionStore } from '@/store/permission'
import { session, local } from '@/utils/storage'
import { toRefs, ref } from 'vue';

const permissionStore = usePermissionStore()
const { setCurrenScreenId } = permissionStore
const { screenConfig, currenScreenId } = toRefs(permissionStore)


const title = 'TITLE'

function handleNav(nav: any) {

    //local.set('currentAddressId','')
    setCurrenScreenId(nav)

    if (nav === 2) {
        router.push('/myMap2')
    } else if (nav === 1) {
        router.push('/home')
    } else if (nav === 3) {
        console.log("??");
        router.push('/blank')
    }
    // local.set('currenScreenLat', nav.lat)
    // local.set('currenScreenLon', nav.lon)
    // Promise.all(villageRequestArr.map((fn) => fn())).finally(() => {
    //   // handleClick(-1)
    //   // loading.value = false
    // })
}


function TEMP() {

    permissionStore.constant = !permissionStore.constant
    console.log("permissionStore.constant", permissionStore.constant);
}

const value = ref()
const sourceData = [
    {
        value: '1',
        label: 'Level one 1',
        children: [
            {
                value: '1-1',
                label: 'Level two 1-1',
                children: [
                    {
                        value: '1-1-1',
                        label: 'Level three 1-1-1',
                    },
                ],
            },
        ],
    },
    {
        value: '2',
        label: 'Level one 2',
        children: [
            {
                value: '2-1',
                label: 'Level two 2-1',
                children: [
                    {
                        value: '2-1-1',
                        label: 'Level three 2-1-1',
                    },
                ],
            },
            {
                value: '2-2',
                label: 'Level two 2-2',
                children: [
                    {
                        value: '2-2-1',
                        label: 'Level three 2-2-1',
                    },
                ],
            },
        ],
    },
    {
        value: '3',
        label: 'Level one 3',
        children: [
            {
                value: '3-1',
                label: 'Level two 3-1',
                children: [
                    {
                        value: '3-1-1',
                        label: 'Level three 3-1-1',
                    },
                ],
            },
            {
                value: '3-2',
                label: 'Level two 3-2',
                children: [
                    {
                        value: '3-2-1',
                        label: 'Level three 3-2-1',
                    },
                ],
            },
        ],
    },
]

const data = ref(sourceData)
const filterMethod = (value:any) => {
    data.value = [...sourceData].filter((item) => item.label.includes(value))
}

</script>

<template>
    <div class="header-container">

        <div style="position: fixed; margin-left: 2%; z-index: 999;">
            <el-tree-select 
                size="large"
                placeholder="Please select"
                v-model="value" 
                :data="data" 
                :filter-method="filterMethod" 
                clearable
                style="
                    width: 240px;
                    color: white;
                    background: rgb(26, 47, 59)" />
        </div>

        <div class="header-center">
            <div class="title" @click="TEMP">
                {{ title }}
            </div>
        </div>

        <div class="header-left" style=" margin-left:15%">
            <div class="header-nav">
                <!-- <div class="header-nav-item " :class="nav.id==currenScreenId?'activeNav':''" v-for="nav in navRight" :key="nav.id" @click="handleNav(nav)">{{nav.name}}</div> -->
                <div class="header-nav-item" @click="handleNav(1)">page1</div>
                <div class="header-nav-item" @click="handleNav(2)">page2</div>
                <div class="header-nav-item" @click="handleNav(3)">page3</div>
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