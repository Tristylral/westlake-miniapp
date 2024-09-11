<template>
  <view class="navbar">
    <!-- logo文字 -->
    <view class="logo">
      <image class="logo-image" src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\logo.png">
      </image>
      <text class="logo-text  animate__animated animate__swing">2024西湖论剑</text>
    </view>
    <!-- 搜索条 -->
    <view class="search">
      <text class="icon-search">搜索活动</text>
      <text class="icon-scan"></text>
    </view>
  </view>
</template>
<script setup lang='ts'>
import 'animate.css';
</script>
<style scoped lang='scss'>
.navbar {
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  position: relative;
  display: flex;
  flex-direction: column;

  .logo {
    display: flex;
    align-items: center;
    height: 100rpx;
    padding-left: 30rpx;
    padding-top: 20rpx;

    .logo-image {
      width: 250rpx;
      height: 80rpx;
    }

    .logo-text {
      flex: 1;
      line-height: 28rpx;
      color: #fff;
      margin: 2rpx 0 0 20rpx;
      padding-left: 20rpx;
      border-left: 1rpx solid #fff;
      font-size: 26rpx;
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10rpx 0 26rpx;
    height: 64rpx;
    margin: 16rpx 20rpx;
    color: #fff;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .icon-search {
    &::before {
      margin-right: 10rpx;
    }
  }

  .icon-scan {
    font-size: 30rpx;
    padding: 15rpx;
  }
}
</style>
