<template>
  <privacy />
  <view class="logo">
    <image src="C:\Users\LENOVO\Desktop\miniWestLake\miniwestlake\src\static\images\logo.png"></image>
  </view>
  <view class="container">
    <form>
      <label>手机号：</label>
      <input type="text" v-model="phone" class="inp">
      <br><br>
      <label>用户名：</label>
      <input type="text" v-model="username" class="inp">
      <br><br>
      <label>密码：</label>
      <input type="safe-password" v-model="password" class="inp">
      <br><br>
      <button @click="register" class="button phone">注册</button>
    </form>
  </view>
</template>
<script setup lang='ts'>
import { ref } from 'vue';
import privacy from "../../components/privacy.vue";
const username = ref('')
const password = ref('')
const phone = ref('')

const register = ()=> {
  uni.request({
    url: 'http://111.231.60.148:8998/uniapp/user/register',
    method: 'POST',
    data: {
      username: username,
      password: password,
      phone:phone
    },
    success: res => {
      if (res.statusCode === 200) {
        // 注册成功，跳转到登录页
        uni.navigateTo({ url: '/pages/login/login' })
        uni.showToast({ title: '注册成功，请登录', icon: 'none' })
      } else {
        // 注册失败，显示错误提示
        uni.showToast({ title: '注册失败', icon: 'none' })
      }
    },
    fail: () => {
      uni.showToast({ title: '网络异常，请稍后再试', icon: 'none' })
    }
  })
}


</script>
<style scoped lang='scss'>
.container {
  margin-top: -250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
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
}

.phone {
  margin-top: 10px;
  background-color: #28bb9c;
}
.inp {
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
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
</style>
