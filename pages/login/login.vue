<script setup lang="ts">
import { postLoginWxMinSimpleAPI } from '@/services/login'
import { useMemberStore } from '@/stores/modules/member';
import { ref } from 'vue';
import privacy from "../../components/privacy.vue";

const username = ref('')
const password = ref('')


const onGetphonenumberSimple = async () => {
  const res = await postLoginWxMinSimpleAPI(username,password)
  //保存会员信息
  const memberStore = useMemberStore()
  memberStore.setProfile(res.result)
  uni.showToast({ icon: 'success', title: '登陆成功' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/my/my' })
  }, 500);
}
const login = async () => {
  const res = await postLoginWxMinSimpleAPI(username, password)
  //保存会员信息
  const memberStore = useMemberStore()
  memberStore.setProfile(res.result)
  uni.showToast({ icon: 'success', title: '登陆成功' })
  setTimeout(() => {
    uni.switchTab({ url: '/pages/my/my' })
  }, 500);
}
</script>

<template>
  <privacy />
  <view class="viewport">
    <view class="logo">
      <image src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\logo.png"></image>
    </view>
    <view class="container">
      <form>
        <label>用户名或手机号：</label>
        <input type="text" v-model="username" class="inp">
        <br><br>
        <label>密码：</label>
        <input type="safe-password" v-model="password" class="inp">
        <br><br>
        <button @click="login" class="button phone"><text class="icon icon-phone"></text>
          登录</button>
        <navigator class="add" url="/pagesMember/add/add">注册</navigator>
      </form>
    </view>
    <view class="login">
      <!-- 小程序端授权登录 -->
      <view class="extra">
        <view class="caption">
          <text>其他登录方式</text>
        </view>
        <view class="options">
          <!-- 通用模拟登录 -->
          <button @tap="onGetphonenumberSimple">
            <text class="icon icon-phone">快捷登录</text>
          </button>
        </view>
      </view>
      <view class="tips">登录/注册即视为你同意《服务条款》和《煮酒论剑隐私协议》</view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
}
.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20rpx 40rpx;
}

.logo {
  flex: 1;
  text-align: center;

  image {
    width: 350rpx;
    height: 120rpx;
    margin-top: 20vh;
  }
}

.login {
  display: flex;
  flex-direction: column;
  height: 60vh;

  .input {
    width: 100%;
    height: 80rpx;
    font-size: 28rpx;
    border-radius: 72rpx;
    border: 1px solid #ddd;
    padding-left: 30rpx;
    margin-bottom: 20rpx;
  }

  .wechat {
    background-color: #06c05f;
  }

  .extra {
    flex: 1;

    .caption {
      width: 440rpx;
      line-height: 1;
      border-top: 1rpx solid #ddd;
      font-size: 26rpx;
      color: #999;
      position: relative;
      margin-left: 100rpx;
      text {
        transform: translate(-40%);
        background-color: #fff;
        position: absolute;
        top: -12rpx;
        left: 50%;
      }
    }

    .options {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 70rpx;

      button {
        padding: 0;
        background-color: transparent;
      }
    }

    .icon {
      font-size: 24rpx;
      color: #444;
      display: flex;
      flex-direction: column;
      align-items: center;

      &::before {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80rpx;
        height: 80rpx;
        margin-bottom: 6rpx;
        font-size: 40rpx;
        border: 1rpx solid #444;
        border-radius: 50%;
      }
    }

    .icon-weixin::before {
      border-color: #06c05f;
      color: #06c05f;
    }
  }
}

.tips {
  position: absolute;
  bottom: 80rpx;
  left: 20rpx;
  right: 20rpx;
  font-size: 22rpx;
  color: #999;
  text-align: center;
}

.container {
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  height: 40vh;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #ccc;
  border-radius: 20px;
  padding: 20px;
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80rpx;
  font-size: 28rpx;
  border-radius: 72rpx;
  color: #fff;

  .icon {
    font-size: 40rpx;
    margin-right: 6rpx;
  }
}

.phone {
  margin-top: 10px;
  background-color: #28bb9c;
}

.add{
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  margin: 10px auto;
  line-height: 30px;
  height: 30px;
  width: 100px;
  border: 1px solid black;
  border-radius: 10px;
}
.inp{
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
}

</style>
