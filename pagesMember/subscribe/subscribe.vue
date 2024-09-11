<template>
  <view class="act">
    <image
      src="https://k.sinaimg.cn/n/front20211101ac/176/w624h352/20211101/80fc-9f6686fcfc834a6504748d4f8092a91f.jpg/w700h350z1l10t10358.jpg"
      mode="scaleToFill"
      class="imgs"
    />
    <view class="talk">
      <view class="saber">网络安全技能大赛<span class="le">5月5日</span></view>
      <button class="cribe" @click="subscribe5">{{ ischange5 ? "订阅" : "取消订阅" }}</button>
    </view>
    <image
      src="https://img2022.gcsis.cn/storage/media/1030/CagCy2VTKKQT8sJNyjge8ZFURbuEukBeiaSc8N7x.jpg"
      mode="scaleToFill"
      class="imgs"
    />
    <view class="talk">
      <view class="saber">安全保障白皮书发布<span class="le">5月6日</span></view>
      <button class="cribe" @click="subscribe6">{{ ischange6 ? "订阅" : "取消订阅" }}</button>
    </view>
    <image
      src="https://www.dbappsecurity.com.cn/uploadfile/2019/12/09/20191209101959jBSDNb.jpg"
      mode="scaleToFill"
      class="imgs"
    />
    <view class="talk">
      <view class="saber">全新产品发布会<span class="le">5月7日</span></view>
      <button class="cribe" @click="subscribe7">{{ ischange7 ? "订阅" : "取消订阅" }}</button>
    </view>
    <image
      src="https://tse2-mm.cn.bing.net/th/id/OIP-C.jhqTtr0QxmfXaSjGIk8L9AAAAA?rs=1&pid=ImgDetMain"
      mode="scaleToFill"
      class="imgs"
    />
    <view class="talk">
      <view class="saber">数字化改革之根基<span class="le">5月8日</span></view>
      <button class="cribe" @click="subscribe8">{{ ischange8 ? "订阅" : "取消订阅" }}</button>
    </view>
  </view>
</template>
<script setup lang='ts'>
import { ref } from 'vue';

const ischange5 = ref(true)
const ischange6 = ref(true)
const ischange7 = ref(true)
const ischange8 = ref(true)
const subscribe5 = () => {
  uni.showToast({
    icon: 'success',
    title: '行程已改变'
  })
  ischange5.value = !ischange5.value
}
const subscribe6 = () => {
  uni.showToast({
    icon: 'success',
    title: '行程已改变'
  })
  ischange6.value = !ischange6.value
}
const subscribe7 = () => {
  uni.showToast({
    icon: 'success',
    title: '行程已改变'
  })
  ischange7.value = !ischange7.value
}
const subscribe8 = () => {
  uni.showToast({
    icon: 'success',
    title: '行程已改变'
  })
  ischange8.value = !ischange8.value
}
</script>
<style scoped lang='scss'>
.act{
  width: 100%;
  height: 600px;
  .imgs{
    width: 80%;
    margin-left: 10%;
    margin-top: 30px;
    height: 200px;
  }
    .talk {
        position: relative;
        width: 80%;
        height: 60px;
        margin-top: 30px;
        margin-left: 10%;
        background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        background-position: 0 5px;
        background-size: cover;
        border: 1px solid rgb(175, 175, 175);
        border-radius: 20px;
        background-size: contain;
        .le{
          margin-left: 10px;
        }
        .saber {
          font-family: SimHei;
          font-size: 15px;
          color: #fff;
          position: absolute;
          left: 20px;
          line-height: 60px;
        }
      }
}
.cribe {
  font-family: SimHei;
  position: absolute;
  color: black;
  font-weight: 500;
  font-size: 14px;
  left: 70%;
  top: 15px;
  width: 28%;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  border-radius: 15px;
  border-style: none;
}

.cribe:hover {
  box-shadow: rgba(255, 255, 255, 0.5) 0 1px 30px;
  transition-duration: .1s;
}
</style>
