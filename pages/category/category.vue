<script setup lang="ts">

let chartData = {
  categories: ["5-05", "5-06", "5-07", "5-08", "5-09", "5-10"],
  series: [
    {
      name: "网页访问量",
      data: [35, 36, 31, 33, 13, 34]
    },
    {
      name: "小程序访问量",
      data: [18, 27, 21, 24, 6, 28]
    }
  ]
}
const opts = {
  color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
  padding: [15, 30, 0, 5],
  enableScroll: false,
  legend: {},
  xAxis: {
    boundaryGap: "justify",
    disableGrid: false,
    min: 0,
    axisLine: false,
    max: 40
  },
  yAxis: {},
  extra: {
    bar: {
      type: "group",
      width: 30,
      meterBorde: 1,
      meterFillColor: "#FFFFFF",
      activeBgColor: "#000000",
      activeBgOpacity: 0.08,
      linearType: "custom",
      barBorderCircle: true,
      seriesGap: 2,
      categoryGap: 2
    }
  }
}

let chartData2 = {
  categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
  series: [
    {
      name: "点赞量",
      lineType: "dash",
      data: [35, 8, 25, 37, 4, 20]
    },
    {
      name: "评论量",
      data: [70, 40, 65, 100, 44, 68]
    },
    {
      name: "转发量",
      data: [100, 80, 95, 150, 112, 132]
    }
  ]
}


const opts2 = {
  color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
    padding: [15, 10, 0, 15],
      enableScroll: false,
        legend: { },
  xAxis: {
    disableGrid: true
  },
  yAxis: {
    gridType: "dash",
      dashLength: 2
  },
  extra: {
    line: {
      type: "curve",
        width: 2,
          activeType: "hollow"
    }
  }
}

const chartData3 = {
  series: [
    {
      data: [{ "name": "5.05", "value": 50 }, { "name": "5.06", "value": 30 }, { "name": "5.07", "value": 20 }, { "name": "5.08", "value": 18 }, { "name": "5.09", "value": 8 }]
    }
  ]
}

const opts3 = {
  color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
  padding: [5, 5, 5, 5],
  enableScroll: false,
  legend: {
    show: true,
    position: "left",
    lineHeight: 25
  },
  extra: {
    rose: {
      type: "area",
      minRadius: 50,
      activeOpacity: 0.5,
      activeRadius: 10,
      offsetAngle: 0,
      labelWidth: 15,
      border: false,
      borderWidth: 2,
      borderColor: "#FFFFFF"
    }
  }
}

const opts4 = {
  color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
    padding: [5, 5, 5, 5],
      dataLabel: false,
        enableScroll: false,
          legend: {
    show: true,
      position: "right",
        lineHeight: 25
  },
  extra: {
    radar: {
      gridType: "radar",
        gridColor: "#CCCCCC",
          gridCount: 3,
            opacity: 0.2,
              max: 200,
                labelShow: true,
                  border: true
    }
  }
}

let chartData4 = {
  categories: ["维度1", "维度2", "维度3", "维度4", "维度5", "维度6"],
  series: [
    {
      name: "点击量",
      data: [90, 110, 165, 195, 187, 172]
    },
    {
      name: "分享量",
      data: [190, 210, 105, 35, 27, 102]
    }
  ]
}
</script>

<template>
  <view class="all">
    <view class="agenda">
    <view class="title animate__animated animate__fadeInDown">
      <text>精彩活动</text>
      <text class="en">wonderful activity</text>
    </view>
  </view>
    <view class="ac1">
      <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/564f5dbf1157432b9ed70c338012642a.png"
        alt="" />
        <text class="ti">格致论道@西湖论剑</text>
      <text
        class="uni-body">“格致论道”是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以"格物致知"的精神探讨科技、教育、生活、未来的发展</text>
    </view>
    <view class="charts-box">
        <qiun-data-charts type="bar" :opts="opts" :chartData="chartData" />
    </view>
    <view style="display: flex;">
        <view style="background-color: lightgray; width: 80%; height: 5rpx; margin-left: 10%;"></view>
      </view>
    <view class="ac2">
      <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/26e81e6767bf4af18b84638091fedc3e.jpg"
        alt="" />
        <text class="ti">西湖论剑安全特训营</text>
      <text class="uni-body">本次培训面向网络安全从业人员，特别是负责网络安全防护的蓝队人员，以及有意向从事蓝队工作的人员。
        培训所需具备的基础能力：应具备网络安全的基本知识，了解常见的网络攻击手法和防御策略</text>
    </view>
    <view class="charts-box2">
      <qiun-data-charts type="line" :opts="opts2" :chartData="chartData2" />
    </view>
    <view style="display: flex;margin-top:50rpx ;">
      <view style="background-color: lightgray; width: 80%; height: 5rpx; margin-left: 10%;"></view>
    </view>
    <view class="ac3">
      <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/d7e559c06b034f18a18b078fd8629c98.jpg"
        alt="" />
        <text class="ti">数字安全官高级研修班</text>
      <text class="uni-body">作为整个企业安全治理结构的设计者和践行人，数字安全官即需要了解国家、行业合规需求与发展趋势，还要洞悉数字经济背景下企业所需的安全能力，协助企业提升安全能力建设的成熟度</text>
    </view>
    <view class="charts-box3">
      <qiun-data-charts type="rose" :opts="opts3" :chartData="chartData3" />
    </view>
    <view style="display: flex;margin-top:50rpx ;">
      <view style="background-color: lightgray; width: 80%; height: 5rpx; margin-left: 10%;"></view>
    </view>
    <view class="ac4">
      <image src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/eb12f1934c2c4f70b86939e00ddc171f.png"
        alt="" />
        <text class="ti">新·见未来 实·现梦想</text>
      <text class="uni-body">今年是习近平总书记提出“八八战略”实施的20周年，是杭州亚运会举办之年，是数字浙江建设20周年,同时也是西湖论剑网络安全大会迈向第二个十年的起始之年</text>
    </view>
    <view class="charts-box4">
      <qiun-data-charts type="radar" :opts="opts4" :chartData="chartData4" />
    </view>
  </view>
</template>

<style lang="scss">
.agenda {
  height: 250px;
  width: 100%;
  .title{
    width: 100%;
    height: 200px;
    color: white;
    font-size: 24px;
    font-weight: lighter;
    padding-top: 100px;
    text-align: center;
    background-image: url(https://gd-hbimg.huaban.com/d85a3d31df33211b2a97bc13a5868cb8e382c68276671f-KhPixO_fw658webp);
    background-size: cover;
  }
    .en {
      margin-left: 10px;
      font-size: 16px;
    }
}
.all{
  background-color: #f5f5f5;
}
.ac1{
  height: 220px;
  margin-left: 10%;
  width: 80%;
  text-align: center;
  font-size: 24px;
  image{
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
 .charts-box {
  margin-top: 250px;
  margin-left: 10%;
   width: 80%;
   height: 300px;
 }
 .charts-box2{
    width: 80%;
    margin-left: 10%;
    height: 300px;
    margin-top: 250px;
 }
 .charts-box3{
    width: 80%;
    margin-left: 10%;
    height: 300px;
    margin-top: 200px;
 }
 .charts-box4 {
   width: 80%;
   margin-left: 10%;
   height: 300px;
   margin-top: 200px;
 }
.uni-body{
  letter-spacing:2px;
  font-weight: lighter;
  font-size: 16px;
  font-family: simHei;
}
.ti{
  letter-spacing:2px;
  display: block;
  text-align: center;
  font-size: 20px;
  background: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.ac2{
    height: 220px;
    margin-left: 10%;
    width: 80%;
    text-align: center;
    font-size: 24px;
    image {
      width: 100%;
      height: 200px;
      margin-top: 10px;
      margin-bottom: 10px;
    }
}
.ac3 {
  height: 220px;
  margin-left: 10%;
  width: 80%;
  text-align: center;
  font-size: 24px;
  image {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
.ac4 {
  height: 220px;
  margin-left: 10%;
  width: 80%;
  text-align: center;
  font-size: 24px;

  image {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}


</style>
