//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var image = require('../image/image.js')

Page({
  data: {
    dishCata: [
      {
        id: 1,
        cataName: "川菜",
        cataDetail: "川菜即四川菜肴，是中国特色传统的四大菜系之一、中国八大菜系之一、中华料理集大成者。",
        image: image.sichuan
      }, {
        id: 2,
        cataName: "粤菜",
        cataDetail: "粤菜即广东菜，是中国传统四大菜系、八大菜系之一，发源于岭南。",
        image: image.guangdong
      }],
    mealCata: [{
      id: 4,
      cataName: "早餐",
      cataDetail: "早餐又叫早点、过早、早饭，是指在早上享用的餐。",
      image: image.bread
    }, {
      id: 5,
      cataName: "午餐",
      cataDetail: "午餐是指大约在中午或者之后一段时间所用的一餐，一般集中在下午一点至两点。",
      image: image.lunch
    }, {
      id: 6,
      cataName: "晚餐",
      cataDetail: "每天晚上吃的正餐笼统的讲叫做晚餐，健康晚餐很重要对我们的身体健康有一定的影响",
      image: image.dinner
    }
    ]
  },
  onLoad: function () {
    console.log(this.data.dishCata[1].image)
  },
  onTap: function () {
    wx.navigateTo({
      url: '/pages/dish-list/dish-list?id=0',
    })
  },
  onCamera: function () {
    wx.chooseImage({
      success: function (res) { },
    })
  }
})
