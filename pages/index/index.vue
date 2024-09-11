<script setup lang="ts">
import SwiperLake from "../../components/SwiperLake.vue";
import CustomNavbar from "../../components/CustomNavbar.vue"
import subNav from "../../components/subNav.vue"
import 'animate.css'
</script>

<template>
  <CustomNavbar />
  <SwiperLake />
  <subNav />
  <view class="lighter first">
    <text class="subti animate__animated animate__flash">大会亮点</text>
    <text class="enti animate__animated animate__bounceInUp">Conference Highlights</text>
  </view>
  <image class="video" src="https://gd-hbimg.huaban.com/a8635d19d5003d36751b475c328f6214ccdcbc63508b3-a5GWDY_fw1200webp"></image>
  <view class="lighter second">
    <text class="subti">精彩活动</text>
    <text class="enti">Wonderful activity</text>
  </view>
  <view class="panel hot">
    <view class="item">
      <view class="title">
        <text class="title-text">最新简历</text>
      </view>
      <navigator hover-class="none" url="/pages/category/category" class="cards">
        <image class="image" mode="aspectFit"
          src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2024/3/0721c6730b704158b0960f0496727220.jpg"></image>
      </navigator>
    </view>
    <view class="item">
      <view class="title">
        <text class="title-text">大赛再度起航</text>
      </view>
      <navigator hover-class="none" url="/pages/category/category" class="cards">
        <image class="image" mode="aspectFit"
          src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2024/3/6e2ffe77375445368d027d75443872d9.jpg"></image>
      </navigator>
    </view>
    <view class="item">
      <view class="title">
        <text class="title-text">AI引领 智启新程</text>
      </view>
      <navigator hover-class="none" url="/pages/category/category" class="cards">
        <image class="image" mode="aspectFit"
          src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2024/3/b84072b897674989a7bd58b6237651b8.jpg"></image>
      </navigator>
    </view>
    <view class="item">
      <view class="title">
        <text class="title-text">数据要素X高级研修班</text>
      </view>
      <navigator hover-class="none" url="/pages/category/category" class="cards">
        <image class="image" mode="aspectFit"
          src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2024/3/ae655a02a9ba4ad5a72cc9efabfe619d.jpg"></image>
      </navigator>
    </view>
  </view>
  <view class="lighter third">
    <text class="subti">媒体中心</text>
    <text class="enti">Wonderful review</text>
  </view>
  <uni-section title="出彩瞬间" type="line">
    <uni-collapse accordion>
      <uni-collapse-item title="">
        <template v-slot:title>
          <uni-list>
            <uni-list-item title="“新十年”扬帆起航 2023西湖论剑·数字安全大会举办">
            </uni-list-item>
          </uni-list>
        </template>
        <view class="content">
          <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/57e7c03b6c2c41de8e6beb4f1c1c5255.jpg" />
          <text
            class="text">5月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会(原西湖论剑·网络安全大会)成功举办。本届大会设一个主论坛、一个数字安全成果展、十个平行论坛和一个科普讲坛，来自政府部门、科研机构、高校以及数字生态从业者等2000余人出席大会。</text>
        </view>
      </uni-collapse-item>
      <uni-collapse-item title="从网络安全扩展到数字安全 2023西湖论剑·数字安全大会召开">
        <view class="content">
          <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/bd68baf913084f5dbe05d59588ab6891.jpg" />
          <text
            class="text">5月7日至8日，2023西湖论剑·数字安全大会论坛活动在杭州举办。来自政府部门、科研机构、高校以及数字生态从业者等2000余位代表出席大会，嘉宾们围绕“数字安全赋能数字中国”开展百余场专题报告。大会官网以及新华网、光明网等30多家媒体平台同步直播。。</text>
        </view>
      </uni-collapse-item>
      <uni-collapse-item title="2023西湖论剑·数字安全大会｜车联网如何系牢 “安全”带？">
        <view class="content">
          <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/abf8955e403c4568b4423d1897042a34.jpg" />
          <text
            class="text">如何保证智能汽车数字化进程中的网络和数据安全?如何打造全链路数据安全护城河，赋能汽车产业数字化转型?5月7日下午，在2023西湖论剑·数字安全大会(原西湖论剑·网络安全大会)的车联网安全论坛上，来自政府部门、科研机构以及企业的数字生态代表们围绕“数字安全赋能车联网”等主题进行深入探讨。会上还发布了“安恒车联网安全运营中心平台”。。</text>
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </uni-section>
</template>

<style lang="scss">
.lighter{
  margin-top: 30px;
  width: 100%;
  height: 100px;
  position: relative;
  color: white;
  background-size: cover;
  .subti{
    font-size: 16px;
    position: absolute;
    top: 30px;
    left: 30px;
  }
  .enti{
    position: absolute;
    font-size: 14px;
    top:60px;
    left: 30px;
  }
}
.video{
  width: 100%;
  height: 250px;
}
.first{
  background-image: url(https://gd-hbimg.huaban.com/bca6be7f7357a50d7e2cff5316bf1257c4a06f25a8021f-UVG7NY_fw1200webp);
}
.second{
  background-image: url(https://gd-hbimg.huaban.com/4323e4e7b9a7213e475e03127a96a4f958e3aab5e6f48-1lJDL3_fw1200webp);
}
.third{
  background-image: url(https://gd-hbimg.huaban.com/4bf118b241a0431180a157fd081a3afbda4e45ff168b46-ACpaDF_fw658webp);
}

.hot {
  display: flex;
  flex-wrap: wrap;
  min-height: 508rpx;
  margin: 20rpx 20rpx 0;
  border-radius: 10rpx;
  background-color: #fff;

  .title {
    display: flex;
    align-items: center;
    padding: 24rpx 24rpx 0;
    font-size: 32rpx;
    background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
  }

  .item {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 254rpx;
    border-right: 1rpx solid #eee;
    border-top: 1rpx solid #eee;

    .title {
      justify-content: start;
    }

    &:nth-child(2n) {
      border-right: 0 none;
    }

    &:nth-child(-n + 2) {
      border-top: 0 none;
    }

    .image {
      width: 300rpx;
      height: 200rpx;
    }
  }

  .cards {
    flex: 1;
    padding: 15rpx 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
    image{
      width: 60%;
      margin-left: 20%;
      height: 150px;
    }
	}

	.text {
    margin-top: 10px;
    display: block;
		font-size: 14px;
    font-family: simHei;
		color: #666;
		line-height: 20px;
	}

	.button {
		// margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}
</style>
