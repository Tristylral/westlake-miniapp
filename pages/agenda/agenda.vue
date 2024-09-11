<template>
  <view class="agenda">
    <view class="title animate__animated animate__fadeInDown">
      <text>大会议程</text>
      <text class="en">Meeting agenda</text>
    </view>
  </view>
  <navigator
      url="/pagesMember/subscribe/subscribe"
      open-type="navigate"
      class="tosub"
    >
      前往议程订阅
    </navigator>
  <uni-section title="日程安排" type="line" padding>
    <uni-steps :options="list2" active-color="#007AFF" :active="active" direction="column" />
  </uni-section>
</template>
<script setup lang='ts'>
  const list2 = [{
					title: 'AI引领 智启新程',
					desc: '2024-05-05 AM'
				}, {
					title: '西湖论剑安全特训营·数据要素X高级研修班',
					desc: '2024-05-05 PM'
				}, {
					title: '西湖论剑安全特训营·AI新质生产力-大模型认知与应用能力提升班',
					desc: '2024-05-06 AM'
				}, {
					title: '新·见未来 实·现梦想',
					desc: '2024-05-06 PM'
				},{
					title: '西湖论剑的十个维度',
					desc: '2024-05-07 AM'
				},{
					title: '十周年精华特刊',
					desc: '2024-05-07 PM'
				},{
					title: '光明网AI主播精彩专访——西湖论剑·安全对话',
					desc: '2024-05-08 AM'
				},{
					title: '今夜不破防',
					desc: '2024-05-08 PM'
				}]
      const active = 1
</script>
<style scoped lang='scss'>
.agenda {
  height: 250px;
  width: 100%;
  .title{
    width: 100%;
    height: 200px;
    color: white;
    font-size: 24px;
    font-weight: lighter;
    text-align: center;
    line-height: 200px;
    background-image: url(https://gd-hbimg.huaban.com/552376c4099d62c85243cdf7b00444c16e892517c98de-ThKy30_fw658webp);
  }
    .en {
      margin-left: 10px;
      font-size: 16px;
    }
}
.example-body {
  flex-direction: column;
  flex: 1;
}

.content {
  padding: 15px;
}

.text {
  font-size: 14px;
  color: #666;
  line-height: 20px;
}

.button {
  margin-top: 10px;
  margin: 10px;
  margin-bottom: 0;
}
.status-btn {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		align-items: center;
		justify-content: center;
		height: 92rpx;
		margin: 30rpx;
		background-color: #007AFF;
	}

	.example-body {
		/* #ifndef APP-NVUE */
		display: block;
		/* #endif */
		padding: 15px;
		flex-direction: row;
	}
  .tosub{
    margin: auto;
    width: 120px;
    height: 50px;
    border-radius: 15px;
    color: white;
    line-height: 50px;
    text-align: center;
    background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  }
</style>
