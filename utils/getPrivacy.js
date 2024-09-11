const PrivacyProtocol = {
  needAuthorization: false,
  privacyContractName: '煮酒论剑',
}
//获取微信侧同步的用户隐私协议开关
export function checkUserPrivacyProtocol() {
  if (wx.getPrivacySetting) {
    wx.getPrivacySetting({
      success: (res) => {
        console.log('协议显示的值', res)
        PrivacyProtocol.needAuthorization = res.needAuthorization
        if (res.needAuthorization) {
          // 需要弹出隐私协议
          PrivacyProtocol.privacyContractName = res.privacyContractName
        }
        uni.setStorageSync('PrivacyProtocol', PrivacyProtocol)
      },
    })
  }
}
