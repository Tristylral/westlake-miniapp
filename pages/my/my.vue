<script setup lang="ts">
import { useMemberStore } from '@/stores'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
//获取会员信息
const memberStore = useMemberStore()

const downloadFun = (id:number)=>{
    //加载框动画
    uni.showLoading({ title: '正在下载……' });

    // console.log(that.hostUrl + '/uploads'+ enclosure)
    uni.downloadFile({
      url: `http://111.231.60.148:8998/uniapp/collection/auth/download/${id}`,
      success: (data) => {
        console.log('打印data', data)
        if (data.statusCode === 200) {
          //隐藏加载框
          uni.hideLoading();
          //文件保存到本地
          uni.saveFile({
            tempFilePath: data.tempFilePath, //临时路径
            success: function (res) {
              // console.log('打印res',res)
              uni.showToast({
                icon: 'success',
                mask: true,
                // title: '文件已保存：' + res.savedFilePath, //保存路径
                title: '下载成功',
                duration: 2000,
              });
            }
          });
        }
      },
      fail: (err) => {
        console.log(err);
        uni.showToast({
          icon: 'none',
          mask: true,
          title: '文件下载失败',
        });
      },
    });
  }

</script>

<template>
  <scroll-view class="viewport" scroll-y enable-back-to-top>
    <!-- 个人资料 -->
    <view class="profile" :style="{ paddingTop: safeAreaInsets!.top + 'px' }">
      <!-- 情况1：已登录 -->
      <view class="overview" v-if="memberStore.profile">
        <navigator url="/pagesMember/profile/profile" hover-class="none">
          <image class="avatar" mode="aspectFill" :src="memberStore.profile.avatar"></image>
        </navigator>
        <view class="meta">
          <view class="nickname">
            {{ memberStore.profile.name || memberStore.profile.username }}
          </view>
          <navigator class="extra" url="/pagesMember/profile/profile" hover-class="none">
            <text class="update">更新头像昵称</text>
          </navigator>
        </view>
      </view>
      <!-- 情况2：未登录 -->
      <view class="overview animate__animated animate__fadeInDown" v-else>
        <navigator url="/pages/login/login" hover-class="none">
          <image class="avatar gray" mode="aspectFill"
            src="http://yjy-xiaotuxian-dev.oss-cn-beijing.aliyuncs.com/picture/2021-04-06/db628d42-88a7-46e7-abb8-659448c33081.png">
          </image>
        </navigator>
        <view class="meta">
          <navigator url="/pages/login/login" hover-class="none" class="nickname">
            未登录
          </navigator>
          <view class="extra">
            <text class="tips">点击登录账号</text>
          </view>
        </view>
      </view>
      <navigator class="settings animate__animated animate__fadeInRight" url="/pagesMember/settings/settings"
        hover-class="none">
        设置
      </navigator>
    </view>
    <!-- 我的订单 -->
    <view class="orders animate__animated animate__fadeIn">
      <view class="title">
        关于自己
      </view>
      <view class="section">
        <!-- 订单 -->
        <navigator url="/pagesMember/profile/profile" class="navigator" hover-class="none">
          <uni-icons type="person" size="30"></uni-icons>
          个人资料
        </navigator>
        <navigator class="navigator" hover-class="none">
          <uni-icons type="undo" size="30"></uni-icons>
          <button open-type="share" class="invite">邀请好友</button>
        </navigator>
      </view>
    </view>
    <view class="orders animate__animated animate__fadeInUp">
      <view class="title">
        相关功能
      </view>
      <view class="section">
        <navigator class="navigator" hover-class="none" @tap="downloadFun(1)">
          <uni-icons type="pulldown" size="30"></uni-icons>
          海报下载
        </navigator>
        <navigator url="/pagesMember/subscribe/subscribe" class="navigator" hover-class="none">
          <uni-icons type="calendar" size="30"></uni-icons>
          议程订阅
        </navigator>
        <!-- 客服 -->
        <button class="contact icon-handset" open-type="contact">客服</button>
      </view>
    </view>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
  background-color: #f7f7f8;
}

.viewport {
  height: 100%;
  background-repeat: no-repeat;
  background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  background-size: 100% auto;
}

/* 用户信息 */
.profile {
  margin-top: 20rpx;
  position: relative;

  .overview {
    display: flex;
    height: 120rpx;
    padding: 0 36rpx;
    color: #fff;
  }

  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .gray {
    filter: grayscale(100%);
  }

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 30rpx;
    padding: 16rpx 0;
    margin-left: 20rpx;
  }

  .nickname {
    max-width: 350rpx;
    margin-bottom: 16rpx;
    font-size: 30rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .extra {
    display: flex;
    font-size: 20rpx;
  }

  .tips {
    font-size: 22rpx;
  }

  .update {
    padding: 3rpx 10rpx 1rpx;
    color: rgba(255, 255, 255, 0.8);
    border: 1rpx solid rgba(255, 255, 255, 0.8);
    margin-right: 10rpx;
    border-radius: 30rpx;
  }

  .settings {
    position: absolute;
    bottom: 0;
    right: 40rpx;
    font-size: 30rpx;
    color: #fff;
  }
}

/* 我的订单 */
.orders {
  position: relative;
  z-index: 99;
  padding: 30rpx;
  margin: 50rpx 20rpx 0;
  background-color: #fff;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 6rpx rgba(240, 240, 240, 0.6);

  .title {
    height: 40rpx;
    line-height: 40rpx;
    font-size: 28rpx;
    color: #1e1e1e;

    .navigator {
      font-size: 24rpx;
      color: #939393;
      float: right;
    }
  }

  .section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 40rpx 20rpx 10rpx;

    .navigator,
    .contact {
      text-align: center;
      font-size: 24rpx;
      color: #333;

      &::before {
        display: block;
        font-size: 60rpx;
        color: #ff9545;
      }
    }

    .contact {
      padding: 0;
      margin: 0;
      border: 0;
      background-color: transparent;
      line-height: inherit;
    }
  }
}
.invite{
  float: right;
  padding-left: 5px;
  margin-right: 90px;
  font-size: 14px;
  font-weight: 300;
  background-color: #fff;
}
</style>
