<template>
  <div class="dataList-group-box">
    <el-row :gutter="20" class="dataList-group">
      <el-col :lg="12" :md="24" class="dataList">
        <scrollTable :tableDataList="inboundDataList" :tableScrollSpeed="1" tableTitle="⬆️近20条入库记录" :itemNumber="10">
        </scrollTable>
      </el-col>
      <el-col :lg="12" :md="24" class="dataList">
        <scrollTable :tableDataList="outboundDataList" :tableScrollSpeed="1" tableTitle="⬇️近20条出库记录" :itemNumber="10">
        </scrollTable>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="20" class="dataList-group"> </el-row> -->
  </div>
</template>

<script setup lang="ts">


</script>