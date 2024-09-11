import { defineStore } from 'pinia';

const useToggleStore = defineStore<
  string,
  Record<string, any>
>('toggle', {
  // 管理的数据
  state: () => ({
    privacyModal: {
      show: false,
      resolvePrivacyAuthorization: () => { },
    },
  }),
  // 获取State中的状态,相当于计算属性（实现逻辑上的组合和应用）
  getters: {},
  // 异步操作
  actions: {
    togglePrivacyModal(value: boolean) {
      this.privacyModal.show = value;
    },
  },
});
export default useToggleStore
