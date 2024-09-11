<template>
  <div>
    <div v-if="showPrivacyPopup" class="popup-container">
      <div class="popup-content">
        <div class="popup-header">{{ AppName }} 申请</div>
        <div class="popup-center">
          在你使用服务之前，请仔细阅读
          <span class="privacy-link" @click="onClickPrivacyPopupTitle">
            {{ PrivacyProtocol.privacyContractName + '小程序隐私保护指引' }}
          </span>
          。如果你同意，请点击“允许”开始使用。
        </div>
        <div class="button-container">
          <button @click="handleRefusePrivacyAuthorization">
            拒绝
          </button>
          <button id="agree-btn" class="btn-agree" open-type="agreePrivacyAuthorization"
            @agreeprivacyauthorization="handleAgreePrivacyAuthorization">
            允许
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onLoad } from "@dcloudio/uni-app";


let resolvePrivacyAuthorization = ()=>{};

const showPrivacyPopup = ref(true); // 是否需要弹出协议授权
const AppName = ref('煮酒论剑')
// 打开弹窗
const openPrivacyPopup = () => {
  showPrivacyPopup.value = true;
  console.log("PrivacyProtocol", PrivacyProtocol);
};

// 关闭弹窗
const closePrivacyPopup = () => {
  showPrivacyPopup.value = false;
};

// 用户点击同意
const handleAgreePrivacyAuthorization = () => {
  console.log("点击了同意");
  resolvePrivacyAuthorization({
    buttonId: "agree-btn",
    event: "agree"
  });
  closePrivacyPopup();
};

// 用户点击拒绝
const handleRefusePrivacyAuthorization = () => {
  console.log("点击了拒绝", resolvePrivacyAuthorization);
  resolvePrivacyAuthorization({
    event: "disagree"
  });
  // 关闭弹窗
  closePrivacyPopup();
  uni.showToast({
    title: "未同意授权，请重试",
    icon: "none",
    duration: 2500
  });
};

// 打开隐私协议
const onClickPrivacyPopupTitle = () => {
  wx.openPrivacyContract({
    success: () => {
      console.log("已打开");
    } // 打开成功
  });
};

// 监听调用微信api的函数
const saveWXCallBack = () => {
  console.log('111111111');
  if (wx.onNeedPrivacyAuthorization) {
    wx.onNeedPrivacyAuthorization((resolve, eventInfo) => {
      // 真机/预览可以拿到eventInfo，模拟器undefined
      console.log("调用接口/组件：", eventInfo);
      openPrivacyPopup();
      resolvePrivacyAuthorization = resolve;
    });
  }
};

const PrivacyProtocol = {
  needAuthorization: false,
  privacyContractName: ''
}
//获取微信侧同步的用户隐私协议开关
const checkUserPrivacyProtocol = ()=> {
  if (wx.getPrivacySetting) {
    wx.getPrivacySetting({
      success: (res) => {
        console.log('协议显示的值', res)
        PrivacyProtocol.needAuthorization = res.needAuthorization
        if (res.needAuthorization) {
          // 需要弹出隐私协议
          PrivacyProtocol.privacyContractName = res.privacyContractName
        }
      }
    })
  }
}

onLoad(async () => {
  await saveWXCallBack();
  checkUserPrivacyProtocol()
});
</script>

<style scoped>
.popup-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 10000;
}

.popup-content {
  background-color: white;
  padding: 40rpx;
  border-radius: 20rpx;
  box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.2);
  text-align: left;
}

.popup-header {
  font-size: 26rpx;
  margin-bottom: 20rpx;
}

.popup-center {
  font-size: 30rpx;
}

.privacy-link {
  color: #3478f7;
  cursor: pointer;
}

.button-container {
  display: flex;
  margin-top: 40rpx;
}

button {
  width: 200rpx;
  height: 70rpx;
  text-align: center;
  line-height: 70rpx !important;
  font-size: 28rpx;
  color: #101010;
  border: 1px solid #eee;
  cursor: pointer;
}

.btn-agree {
  background-color: rgb(7, 193, 96);
  color: #fff;
}
</style>
