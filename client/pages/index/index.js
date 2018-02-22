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
      url: `/pages/dish-list/dish-list?from=index&type=catagory`,
    })
  },
  onCamera: function () {
    wx.chooseImage({
      sizeType: ['compressed'],
      success: function (res) {
        wx.showLoading({
          title: '识别中...',
        })
        wx.uploadFile({
          url: 'https://api-cn.faceplusplus.com/imagepp/beta/detectsceneandobject',
          filePath: res.tempFilePaths[0],
          name: 'image_file',
          formData: {
            'api_key': 'meiPFtpY_xdltXHypraCSQHQmT0jkPsP',
            'api_secret': '92cG6Hzt-xGDu7aeod2RfbNwudgqZydh'
          },
          success: (res) => {
            res.data = JSON.parse(res.data);
            console.log(res.data);
            if(res.data.objects.length != 0) {
              var result = res.data.objects[0].value;
            }
            else {
              var result = res.data.scenes[0].value;
            }
            wx.hideLoading();
            wx.navigateTo({
              url: `/pages/dish-list/dish-list?from=index&type=search&dishName=${result}&show=${result}搜索结果`,
            })
          }
        })
      },
    })
  },
  onConfirm: function(e) {
    wx.navigateTo({
      url: `/pages/dish-list/dish-list?from=index&type=search&dishName=${e.detail.value}&show=搜索结果`,
    })
  }
})
