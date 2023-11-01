function screenAdaptation() {
//   let screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
//     let screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
//     let defWidth = 1920;
//     let defHeight = 1080;
//     let xScale = screenWidth / defWidth;
//     let yScale = screenHeight / defHeight;
//     var style1 = document.createElement('style');
//     style1.innerHTML = '#page{transform: scale(' + xScale + ',' + yScale + ')}';
//     document.head.appendChild(style1);
// 	// rem 的根字体大小，不用可删除
//     // document.documentElement.style.fontSize = '100px';
// return


  let targetX = 1920
  let targetY = 1080
  let targetRatio = 16 / 9 // 宽高比率

  // 2.拿到当前设备(浏览器)的宽度
  let currentX = document.documentElement.clientWidth || document.body.clientWidth
  let currentY = document.documentElement.clientHeight || document.body.clientHeight
  //  1920 * 1080  -> 3840 * 2160

  // 3.计算缩放比例
  let scaleRatio = currentX / targetX // 参照宽度进行缩放 ( 默认情况 )
  let currentRatio = currentX / currentY // 宽高比率

  // 超宽屏
  if (currentRatio > targetRatio) {
    scaleRatio = currentY / targetY // 参照高度进行缩放
    const body = document.body
    body.setAttribute(
      'style',
      `width:${targetX}px; height:${targetY}px;transform: scale(${scaleRatio}) translateX(-50%); left: 50%`
    )
  } else {
    // 4.开始缩放网页
    const body = document.body
    body.setAttribute(
      'style',
      `width:${targetX}px; height:${targetY}px; transform: scale(${scaleRatio})`
    )
  }
}

export function useScreenAdaptation() {
  screenAdaptation()
  addEventListener('resize', screenAdaptation)
}
