<template>
  <view class="fixedtool">
    <view class="sub" @tap="goTop">
      <image src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\right_5.png" alt="返回" />
      <button>返回</button>
    </view>
    <button class="Share" open-type="share">
      <image src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\right_1.png" alt="分享" />
      <view>分享</view>
    </button>
    <view class="sub" @tap="miniVisible">
      <image src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\right_4.png" alt="指南" />
      <button>指南</button>
    </view>
  </view>
</template>
<script setup lang='ts'>

const miniVisible = () => {
  uni.switchTab({ url: '/pages/agenda/agenda' })
}

const goTop = ()=>{
  wx.pageScrollTo({
    scrollTop: 0
  })
}

wx.showShareMenu({
  withShareTicket: true,
  menus: ['shareAppMessage', 'shareTimeline']
})



</script>
<style scoped lang='scss'>
.fixedtool {
  z-index: 500;
  position: fixed;
  overflow: hidden;
  border-radius: 10px;
  top: 400px;
  width: 50px;
  height: 155px;
  left: 88%;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  display: flex;
  flex-direction: column;
  .Share{
    width: 50px;
    height: 50px;
    color: aliceblue;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    image{
      margin-top: -15px;
      width: 20px;
      height: 20px;
    }
    view{
      font-size: 10px;
      margin-top: -20px;
      width: 100%;
    }
  }
}

.sub {
  width: 50px;
  height: 50px;
  color: aliceblue;
}


.sub image {
  margin-top: 10px;
  margin-left: 15px;
  width: 20px;
  height: 20px;
}


.sub button {
  color: white;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  font-size: 10px;
  border: none;
  width: 50px;
}

</style>
