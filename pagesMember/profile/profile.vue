<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import { getMemberProfileAPI, putMemberProfileAPI } from '../../services/profile'
import { ref } from 'vue';
import type { ProfileDetail } from '../../types/member.d'
import { useMemberStore } from '../../stores'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const profile = ref<ProfileDetail>({} as ProfileDetail)
//获取个人信息,修改个人信息则需要提供初始值
const getMemberProfileData = async () => {
  const res = await getMemberProfileAPI()
  profile.value = res.result
}

onLoad(() => {
  getMemberProfileData()
})

const memberStore = useMemberStore()
//修改头像
const onAvatarChange = () => {
  //调用拍照/选择图片
  uni.chooseMedia({
    //文件个数
    count: 1,
    //文件类型
    mediaType: ['image'],
    success: (res) => {
      const { tempFilePath } = res.tempFiles[0]
      //文件上传
      uni.uploadFile({
        url: 'http://111.231.60.148:8998/uniapp/user/auth/imageUpload',
        name: '',
        filePath: tempFilePath,
        success: (res) => {
          if (res.statusCode === 200) {
            const avatar = JSON.parse(res.data).result.avatar
            //个人信息页数据更新
            profile.value!.avatar = avatar
            //Store头像更新
            memberStore.profile!.avatar = avatar
            uni.showToast({ icon: 'success', title:'更新成功'})
          } else {
            uni.showToast({
              icon:'error',title:'出错了'
            })
          }
        },
      })
    },
  })
}

//点击保存提交表单
const onSubmit = async () => {
  const res = await putMemberProfileAPI({
    name: profile.value?.name,
    sex: profile.value.sex,
    username: profile.value?.username,
    avatar:profile.value.avatar
  })
  //更新Store昵称
  memberStore.profile!.name = res.result.name
  uni.showToast({ icon: 'success', title: '保存成功' })
  setTimeout(() => {
    uni.navigateBack()
  }, 500);

}
//修改性别
const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  profile.value.sex = ev.detail.value
}
</script>
<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view @tap="onAvatarChange" class="avatar-content">
        <image class="image" :src="profile?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{profile?.username}}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input class="input" type="text" placeholder="请填写昵称" v-model="profile.name" />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profile?.sex === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profile?.sex=== '女'" />
              女
            </label>
          </radio-group>
        </view>
      </view>
      <!-- 提交按钮 -->
      <button @tap="onSubmit" class="form-button">保 存</button>
    </view>
  </view>
</template>
<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
