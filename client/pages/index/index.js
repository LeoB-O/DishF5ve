//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')

Page({
  data: {
    dishCata: [
      {
        id: 1,
        cataName: "川菜",
        cataDetail: "川菜即四川菜肴，是中国特色传统的四大菜系之一、中国八大菜系之一、中华料理集大成者。",
        imageUrl: ''
      }
    ]
  },
  onLoad: function () {
    wx.request({
      url: config.service.getCatagoryList,
      success: (res) => {
        console.log(res.data);
        this.data.dishCata = res.data;
        this.setData(this.data);
      }
    })
  },
  onTap: function () {
    wx.navigateTo({
      url: '/pages/dish-list/dish-list?from=index&type=catagory',
    })
  },
  onCamera: function () {
    wx.chooseImage({
      success: function (res) { },
    })
  }
})
