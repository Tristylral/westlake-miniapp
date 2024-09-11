<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" :indicator-dots="true">
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image"
            src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\swi1.jpg"></image>
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image"
            src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\swi2.jpg"></image>
        </navigator>
      </swiper-item>
      <swiper-item>
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image"
            src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\swi3.jpg"></image>
        </navigator>
      </swiper-item>
    </swiper>
  </view>
</template>
<script setup lang='ts'>
</script>
<style scoped lang='scss'>
:host {
  display: block;
  height: 280rpx;
}

/* 轮播图 */
.carousel {
  height: 200px;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;

  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;

    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }

    .active {
      background-color: #fff;
    }
  }

  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
