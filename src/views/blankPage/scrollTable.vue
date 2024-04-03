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
          background-color: whitesmoke;
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
                {{ (index + 1) > 20 ? (index + 1) - 20 : (index + 1) }}
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

import { ref, onMounted, watch, defineProps, computed } from "vue";
import { requestAnimationFrame, cancelAnimationFrame } from '@/utils/requestAnimationFrame.ts'
console.log("window", window.history);

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

// 监听tableDataList变化
watch(props.tableDataList, (newVal, oldVal) => {
  // 这里放处理tableDataList变化的逻辑
  showTableDataList.value = [...newVal];
  actionTable();
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

const tRef = ref('');
const tableRef = computed(() => {
  if (!tRef.value || tRef.value === "") {
    return `${Date.now() + (Math.random() * (19999 - 10000) + 10000 + 1).toFixed(0)}-ScrollTable`;
  } else {
    return tRef.value;
  }
});

const tableHeight = computed(() => {
  return props.itemNumber * props.itemHeight;
});
const scrollTimeMilliSecond: any = computed(() => {
  return (1000 / 60 / props.tableScrollSpeed).toFixed(0);
});

// // 节流时间间隔倍数（放大执行一次动画所要的帧数，1为1帧执行一次滚动动画）
// // 越大切换页面的时候会反方向滚的高度越高，后面会慢慢恢复正常
let tableAddItemFlag = ref(false); // 是否添加了行数
let tableAddItemNum = ref(0); // 添加的行数(用于无缝轮滚)
let tableScrollFlag = ref(false) // 是否允许滚动
let tableSize = ref(0); // 表格总高度
let tableScrollTimer: any = ref(null); // 滚动定时器
let throttleNum = ref(100); // 节流时间间隔倍数
let tableScrollToEnd = ref(false); // 是否滚动到末尾
let tableDom: any = ref(null); // 表格dom
let nowScrollTop = ref(0); // 当前滚动高度
let tableScrollSize = ref(1) // 每次滚动条的高度

const showTableDataList = ref<any[]>(props.tableDataList[0] as any[]);

function getShowTableListData() {
  const rowNum = props.itemNumber;
  tableAddItemFlag.value = false;
  let afterLength = showTableDataList.value!.length;

  showTableDataList.value!.forEach((item, index) => {
    if (typeof item == "object") item.tableIndex = index + 1;
    else item = { tableIndex: index, tableData: item };
  });

  if (showTableDataList.value!?.length <= rowNum) {
    tableAddItemNum.value = 0;
    tableScrollFlag.value = false;
  } else if (
    showTableDataList.value!?.length > rowNum &&
    showTableDataList.value!?.length < rowNum * 2
  ) {
    tableAddItemNum.value = showTableDataList.value!.length - rowNum;
  } else {
    tableAddItemNum.value = rowNum;
  }
  if (tableAddItemNum.value > 0) {
    for (let i = 0, j = 0; i < rowNum; i++, j++) {
      if (showTableDataList.value.length >= 30) {
        return
      }
      showTableDataList.value!.push(showTableDataList.value[j]);
    }
    for (
      let i = afterLength, j = 1;
      i < showTableDataList.value!.length;
      i++, j++
    ) {
      // console.log("bbb=>", `i:${i},j:${j}`);
      showTableDataList.value[i].tableIndex = j;
    }
    tableScrollFlag.value = true;
    tableAddItemFlag.value = true;
  }

  console.log("showTableDataList=>", showTableDataList.value);
}

function actionTable() {
  getShowTableListData();
  tableSize.value = showTableDataList.value.length;

  //如果数据量小于可视区域，则不滚动
  if (tableSize.value > props.itemNumber) {
    console.debug("长度满足条件，滚动!", tableSize.value, props.itemNumber);
    tableScrollFlag.value = true;
    if (!props.tableScrollSpeed || props.tableScrollSpeed === 1) {

      // props.tableScrollSpeed = 1;

      startScrollByRAF();

    } else if (props.tableScrollSpeed <= 0) {
      tableScrollFlag.value = false;
    } else {
      startScrollByInterval();
    }
  } else {
    console.debug("长度不足，不滚动!", tableSize.value, props.itemNumber);
  }
}

const domList = document.getElementsByClassName('table-data-list')

// 获取 tableDom 的函数
const getTableDom = () => {
  console.log("domList=>", domList);

  // 遍历 HTMLCollection 中的每个元素
  Array.from(domList).forEach((ele) => {
    ele.addEventListener("click", function () {
      if (tableScrollFlag.value) {
        stopScrollByRAF();
      } else {
        setTimeout(() => {
          tableScrollFlag.value = false;
          actionTable();
        }, 0);
      }
    });
  })

}

function startScrollByRAF() {
  if (!tableScrollFlag.value) return;
  // const table = tableDom.value;
  const clientHeight = props.itemNumber * props.itemHeight;
  const totalHeight = tableSize.value * props.itemHeight;
  const residueHeight = totalHeight - clientHeight - nowScrollTop.value;
  if (residueHeight > 0) {

    nowScrollTop.value += tableScrollSize.value;
    // table.style.transform = `translateY(${nowScrollTop.value * -1}px)`;

    for (let i = 0; i < domList.length; i++) {
      domList[i].style.transform = `translateY(${nowScrollTop.value * -1}px)`;
    }

  } else {
    nowScrollTop.value = 0;
    // table.style.transform = `translateY(${nowScrollTop.value * -1}px)`;

    for (let i = 0; i < domList.length; i++) {
      domList[i].style.transform = `translateY(${nowScrollTop.value * -1}px)`;
    }

  }
  tableScrollTimer.value = requestAnimationFrame(startScrollByRAF);
}

function stopScrollByRAF() {
  tableScrollFlag.value = false;
  cancelAnimationFrame(tableScrollTimer.value);
}

function scrollFun() {
  const clientHeight = props.itemNumber * props.itemHeight; // 可见区域的高度
  const totalHeight = tableSize.value * props.itemHeight; // 整个表格的高度
  const residueHeight = totalHeight - clientHeight - nowScrollTop.value; // 剩余高度
  const nextScrollSize = tableScrollSize.value * throttleNum.value; // 每次滚动的高度
  const scrollCostTime = scrollTimeMilliSecond * throttleNum.value; // 滚动一次所需的时间

  // 遍历 HTMLCollection 中的每个元素
  Array.from(domList).forEach((element) => {
    // 判断剩余高度是否大于0
    if (residueHeight > 0) {
      if (nowScrollTop.value + nextScrollSize > totalHeight) {
        // 如果滚动之后的位置超过表格底部，则将滚动位置设置为表格底部
        nowScrollTop.value += residueHeight;
        const slowUpSize = residueHeight / nextScrollSize; // 重新计算速度倍率
        element.style.transition = `transform ${(
          scrollCostTime * slowUpSize
        ).toFixed(0)}ms`;
      } else {
        nowScrollTop.value += nextScrollSize;
        element.style.transition = `transform ${scrollCostTime}ms linear`;
      }
      element.style.transform = `translateY(${nowScrollTop.value * -1}px)`;
    } else {
      // 小于0就让滚到高度为0的位置
      nowScrollTop.value = 0;
      element.style.transition = `unset`;
    }
  });
}

function startScrollByInterval() {
  scrollFun();
  tableScrollTimer.value = setInterval(() => {
    scrollFun();
  }, scrollTimeMilliSecond * throttleNum.value);
}

onMounted(() => {
  // console.log(props.tableDataList);
  actionTable()
  getTableDom()

})


</script>