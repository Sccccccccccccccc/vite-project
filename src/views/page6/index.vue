<script setup lang="ts">
import "highlight.js/styles/github.css";
import 'highlight.js/styles/atom-one-dark.css'

let code = `let a = 1;import hljs-containerVuePlugin from '@highlightjs/vue-plugin';import hljs-containerVuePlugin from '@highlightjs/vue-plugin';
import hljs-containerVuePlugin from '@highlightjs/vue-plugin';
import hljs-containerVuePlugin from '@highlightjs/vue-plugin';

<template>
<div style="background-color: aliceblue; width: 50%; position: relative; left: 50%; transform: translateX(-50%); top: 34%;">
  <div class="dataList-group-box">
    <el-row :gutter="20" class="dataList-group">
      <el-col :lg="12" :md="24" class="dataList">
        <scrollTable :tableDataList="inboundDataList" :tableScrollSpeed="1" tableTitle="⬆️近20条入库记录" :itemNumber="10">
        </scrollTable>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="dataList-group"> </el-row>
  </div>
</div>
</template>
`;


</script>


<template>

    <div class="hljs-container" codetype="JavaScript">
        <highlightjs language="JavaScript" :autodetect="true" :code="code"></highlightjs>
    </div>

</template>

<style scoped lang="scss">
/* 语法高亮 */
.hljs-container {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 20%;
    display: block;
    width: 800px;
    padding: 30px 5px 2px;
    overflow-x: auto;
    line-height: 20px;
    text-align: left;
    background: #21252b;
    box-shadow: 0 10px 30px 0 rgb(0 0 0 / 40%);
}

/** 3个点 */
.hljs-container::before {
    position: absolute;
    top: 10px;
    left: 15px;
    width: 12px;
    height: 12px;
    overflow: visible;
    font-weight: 700;
    font-size: 16px;
    line-height: 12px;
    white-space: nowrap;
    text-indent: 75px;
    background-color: #fc625d;
    border-radius: 16px;
    box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
    content: attr(codetype);
}

/** 滚动条 */
:deep(.hljs) {
    overflow-x: auto;
}

:deep(.hljs::-webkit-scrollbar) {
    width: 12px !important;
    height: 12px !important;
}

:deep(.hljs::-webkit-scrollbar-thumb) {
    height: 30px !important;
    background: #d1d8e6;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 19px;
    opacity: 0.8;
}

:deep(.hljs::-webkit-scrollbar-thumb:hover) {
    background: #a5b3cf;
    background-clip: content-box;
    border: 2px solid transparent;
}

:deep(.hljs::-webkit-scrollbar-track-piece) {
    width: 30px;
    height: 30px;
    background: #333;
}

::-webkit-scrollbar-button {
    display: none;
}
</style>
