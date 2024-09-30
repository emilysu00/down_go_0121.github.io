//Parallax
const parallaxBg = document.querySelector(".bm");

// 將傾斜數據應用於背景偏移
function handleOrientation(event) {
  const beta = event.beta; // 手機上下傾斜
  const gamma = event.gamma; // 手機左右傾斜

  // 計算背景應移動的量 (可調整幅度)
  const xOffset = gamma * 3; // 調整左右移動的速度
  const yOffset = beta * 6; // 調整上下移動的速度

  // 更新背景的位置
  parallaxBg.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
}

// 監聽裝置的方向改變事件
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", handleOrientation);
} else {
  alert("您的裝置不支援裝置方向事件");
}
