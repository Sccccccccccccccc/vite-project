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

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { inboundDataList, outboundDataList } from './tempData'
import scrollTable from "./scrollTable.vue";


onMounted(() => {

});

</script>

<style lang="scss" scoped>
.dataList-group-box {
  position: relative;
  margin-left: 20px;

  // width: 100%;
  // height: 400px;

  .dataList-group {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    // padding: 0 0 0 5%;

    // height: 100%;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    .dataList {
      // margin-top: 10%;
    }
  }

}
</style>