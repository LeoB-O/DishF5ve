//index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var md5 = require('./md5.js')

Page({
  data: {
    dishCata: [
    ]
  },
  onLoad: function () {
    wx.request({
      url: config.service.getCatagoryList,
      success: (res) => {
        console.log(res.data);
        this.data.dishCata = res.data;
        this.setData(this.data);
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none',
          duration: 3000
        })
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
            if(res.statusCode==413){
              wx.showToast({
                title: '识别失败！',
                icon: 'none',
                duration: 2500
              });
              return;
            }
            res.data = JSON.parse(res.data);
            console.log(res.data);
            if (res.data.objects.length != 0) {
              var result = res.data.objects[0].value;
            }
            else {
              var result = res.data.scenes[0].value;
            }
            var q = result;
            var from = "EN";
            var to = "zh-CHS";
            var appKey = config.translation.appKey;
            var salt = (new Date).getTime();
            var sign = md5(appKey + q + salt + config.translation.appSecret);
            wx.request({
              url: `https://openapi.youdao.com/api?q=${q}&from=${from}&to=${to}&appKey=${appKey}&salt=${salt}&sign=${sign}`,
              success: (res) => {
                console.log(res.data);
                var result = res.data.translation[0];
                wx.hideLoading();
                wx.navigateTo({
                  url: `/pages/dish-list/dish-list?from=index&type=search&dishName=${result}&show=搜索结果:${result}`,
                })
              }
            })

          }
        })
      },
    })
  },
  onConfirm: function (e) {
    wx.navigateTo({
      url: `/pages/dish-list/dish-list?from=index&type=search&dishName=${e.detail.value}&show=搜索结果`,
    })
  }
})
