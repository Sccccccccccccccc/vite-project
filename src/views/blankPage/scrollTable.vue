<style lang="scss" scoped>
.scroll-table-warpper {
  width: 100%;
  font-size: 13px;
  color: rgb(31, 31, 31);

  .scroll-table-content {
    --border-width: 1px;
    overflow: hidden;
    // --item-number: 6;
    // --item-height: 50px;
    padding: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    .table-title {
      font-size: 1.3em;
      font-weight: 700;
      text-align: center;
      color: #909399;
      padding: 12px 0 24px 0px;
    }

    .table-item {
      width: 100%;
      display: grid;
      grid-template-columns: 10% 20% 20% 10% 20% 20%;

      .index,
      .goodName,
      .goodNumber,
      .goodSize,
      .goodColor,
      .time {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
      }

      .item-col {
        padding: 8px;
        height: 80px;
        border: 1px solid #dfe6ec;
        background-color: rgb(245, 247, 250);
      }
    }

    .scroll-table-header {
      border: 1px solid #dfe6ec;
      border-bottom-width: 0px;

      .item-col {
        color: rgb(144, 147, 153);
        height: 50px;
        font-weight: 700;
      }
    }

    .scroll-table-section {
      position: relative;
      --scrollbar-width: 0px;
      overflow: auto;
      border: 1px solid #dfe6ec;
      border-top-width: 0px;
      height: calc(var(--item-number) * var(--item-height));
      width: 100%;

      &::-webkit-scrollbar {
        width: var(--scrollbar-width);
      }

      &::-webkit-scrollbar-thumb {
        width: var(--scrollbar-width);
        background-color: #909399;
      }

      .table-view-box {
        position: relative;
        height: calc(var(--item-number) * var(--item-height));
        width: 100%;
        overflow: hidden;
        cursor: pointer;

        .table-data-list {
          position: relative;
          width: 100%;
        }
      }

      .table-is-empty {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        z-index: 1;
        height: calc(var(--item-number) * var(--item-height));
        color: rgb(144, 147, 153);
        font-weight: 700;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      .table-item {
        &.is-dark {
          .item-col {
            background-color: rgba(245, 247, 250, 0.8);
          }
        }

        .item-col {
          height: 50px;
          background-color: transparent;
        }
      }
    }
  }
}
</style>
<template>
  <div class="scroll-table-warpper">
    <div class="scroll-table-content" :style="{
      '--item-height': `${itemHeight}px`,
      '--item-number': `${itemNumber}`,
    }">
      <div class="table-title">
        <span>{{ tableTitle }}</span>
      </div>
      <header class="scroll-table-header">
        <div class="table-item header">
          <div class="item-col index">序号</div>
          <div class="item-col goodName">货品名</div>
          <div class="item-col goodNumber">数量</div>
          <div class="item-col goodSize">尺码</div>
          <div class="item-col goodColor">颜色</div>
          <div class="item-col time">时间</div>
        </div>
      </header>
      <section class="scroll-table-section">
        <div class="table-view-box">
          <div class="table-data-list" :ref="tableRef">
            <!-- style="transform: translateY(var(--item-height));" -->
            <div :class="(index + 1) % 2 == 0 ? 'table-item is-dark' : 'table-item'
      " v-for="(item, index) in showTableDataList" :key="index">
              <div class="item-col index">
                {{ item.tableIndex }}
              </div>
              <div class="item-col goodName">{{ isEmpty(item.goodsName) }}</div>
              <div class="item-col goodNumber">
                {{ isEmpty(item.operationNumber) }}
              </div>
              <div class="item-col goodSize">{{ isEmpty(item.size) }}</div>
              <div class="item-col goodColor">{{ isEmpty(item.color) }}</div>
              <div class="item-col time">
                {{ formatDate(item.operationTime) }}
              </div>
            </div>
          </div>
        </div>
        <div class="table-is-empty" v-if="props.tableDataList.length == 0">
          <span>暂无数据</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted, watch, defineProps } from "vue";

const showTableDataList = ref<any[]>([]);
const props = defineProps({
  // 表格数据行高
  itemHeight: {
    type: Number,
    default: 50,
  },
  tableDataList: {
    type: Array,
    default: () => []
  },
  // 表格Ref
  tRef: {
    type: String,
  },
  // 表格滚动速度
  tableScrollSpeed: {
    type: Number,
    default: 1,
  },
  // 表格标题
  tableTitle: {
    type: String,
    default: "未命名表格",
  },
  // 表格数据列
  itemNumber: {
    type: Number,
    default: 5,
  },
});


function isEmpty(data: any) {
  if (data !== 0 && !data) {
    return "-";
  } else {
    return data;
  }
}
function formatDate(dateStr: string) {
  if (!dateStr || dateStr === "") return "-";
  const date = new Date(dateStr);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，所以要加1
  const dd = String(date.getDate()).padStart(2, "0");
  const hh = String(date.getHours()).padStart(2, "0");
  const min = String(date.getMinutes()).padStart(2, "0");
  const ss = String(date.getSeconds()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd} ${hh}:${min}:${ss}`;
}

</script>