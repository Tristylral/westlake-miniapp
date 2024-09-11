<script setup lang="ts">

</script>

<template>
  <view class="agenda">
    <view class="title animate__animated animate__fadeInDown">
      <text>展商风采</text>
      <text class="en">Exhibitor style</text>
    </view>
    <view class="buss">
      <image src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\earth.png" mode="scaleToFill"
        class="earth" />
      <view class="logo1">
        <image src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\logo.png" alt="" />
      </view>
      <view class="logo2 logo">
        <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/8dadce3bcf53474b8141421cbc60f360.png"
          alt="" />
      </view>
      <view class="logo3 logo">
        <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d79ec14ff65b4af19b8439659668fd19.png"
          alt="" />
      </view>
      <view class="logo4 logo">
        <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/a39af7377bbb4860809ab761137bc8ea.png"
          alt="" />
      </view>
      <view class="logo5 logo">
        <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/2e88c33068c04d31a5bb9599c22382a0.png"
          alt="" />
      </view>
      <view class="logo6 logo">
        <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/d86aad180ee14acb95d1df723414aec2.png"
          alt="" />
      </view>
      <view class="logo7 logo">
        <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/4e59350e44e04e50bff593c080c8a57b.png"
          alt="" />
      </view>
    </view>
  </view>
</template>

<style lang="scss">
.agenda {
  height: 100%;
  width: 100%;

  .title {
    width: 100%;
    height: 200px;
    color: white;
    font-size: 24px;
    font-weight: lighter;
    text-align: center;
    line-height: 200px;
    background-image: url(https://gd-hbimg.huaban.com/1d33f00ece28cdfa4c60678af5327a1044c4a5d61de31e-wfuxGn_fw658webp);
  }
  .en{
    margin-left: 10px;
    font-size: 16px;
  }
}

.logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 1px solid black;
  overflow: hidden;
}

.logo1 {
  position: absolute;
  top: 400px;
  left: 38%;
  width: 120px;
  height: 50px;
  border-radius: 50%;
}

.logo2 {
  position: absolute;
  top: 450px;
  left: 15%;
}

.logo3 {
  position: absolute;
  top: 350px;
  left: 15%;
}

.logo4 {
  position: absolute;
  top: 260px;
  left: 43%;
}

.logo5 {
  position: absolute;
  top: 350px;
  left: 72%;
}

.logo6 {
  position: absolute;
  top: 450px;
  left: 72%;
}

.logo7 {
  position: absolute;
  top: 530px;
  left: 44%;
}
.buss{
  margin-top: 50px;
  width: 100%;
  height: 500px;
  .earth{
    width: 150%;
    height: 350px;
    margin-top: -10px;
    margin-left: -100px;
  }
}
</style>
