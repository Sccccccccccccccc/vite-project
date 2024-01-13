<script setup lang="ts">
import EZUIKit from 'ezuikit-js';
import Header from '../Home/header-container/header-container.vue'
import { ref } from 'vue';

const videoShow = ref(false);
var player = null;
function showVideoModel(data) {
    console.log(data)
    videoShow.value = true
    player = new EZUIKit.EZUIKitPlayer({
        id: 'video', // 视频容器ID
        accessToken: 'at.4h5iu5oc0xivmqpv0985pdvm3wxgnks2-5fk8x0iidl-0mx7u37-vtja1mffy',
        url: 'ezopen://open.ys7.com/D38048794/5.live',
        // simple - 极简版; pcLive-pc直播；pcRec-pc回放；mobileLive-移动端直播；mobileRec-移动端回放;security - 安防版;voice-语音版;
        //template: 'simple',
        plugin: ['talk'], // 加载插件，talk-对讲
        width: 710,
        height: 370,
    });
}


let arrr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]
// [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": []
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     // 结果 ,,,
//                 ]
//             }
//         ]
//     }
// ]
//数组转树
function getTreeData(arr: any) {
    // 删除 所有 children,以防止多次调用
    arr.forEach(
        (item: any) => delete item.children
    );
    // 将数据存储为 以 id 为 KEY 的 map 索引数据列
    var map: any = {};
    arr.forEach(
        (item: any) => {
            (map[item.id] = item);
        }
    );
    console.log("map", map)
    var val: any = [];
    console.log("arr2", arr);

    arr.forEach(
        (item: any) => {
            // 以当前遍历项的pid,去map对象中找到索引的id
            var parent = map[item.pid];
            // 如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到他对应的父级中
            if (parent) {
                console.log("parent",parent);
                (parent.children || (parent.children = [])).push(item);
            }
            // 如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
            else {
                val.push(item);
            }
        });
    return val;
}
console.log("getTreeData", getTreeData(arrr));


</script>

<template>
    <Header></Header>

    <div class="container">
        <div class="video">

            this is a blankPage

        </div>
    </div>
</template>

<style lang="less" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.video {
    width: 500px;
    height: 500px;
    text-align: center;
    background-color: rgb(91, 121, 149);


}
</style>
 