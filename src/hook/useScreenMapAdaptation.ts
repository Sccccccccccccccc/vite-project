
function fnResize() {
  let screenWidth = document.body.clientWidth || document.documentElement.clientWidth;
  let screenHeight = document.body.clientHeight || document.documentElement.clientHeight;
  let defWidth = 1920;
  let defHeight = 1080;
  let xScale = screenWidth / defWidth;
  let yScale = screenHeight / defHeight;
  return {xScale:xScale,yScale:yScale}
}


function resetMapSize() {
  let scaleWH = fnResize();
  let mapContent = document.getElementById("map-container");
  mapContent.style.transform = `scale(${1 / scaleWH.xScale},${
    1 / scaleWH.yScale
  })`
}
