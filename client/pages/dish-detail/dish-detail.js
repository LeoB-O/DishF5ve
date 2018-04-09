const config = require('../../config.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishArray: [],
    dishName: '',
    userInfo: {},
    dishId: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.dishId = options.id;
    this.setData(this.data);
    wx.request({
      url: config.service.getDishDetails + `/id/${options.id}`,
      success: (res) => {
        this.data.dishArray = res.data;
        console.log(res.data);
        this.data.dishArray[0].materials = JSON.parse(this.data.dishArray[0].materials);
        this.data.dishArray[0].ways = JSON.parse(this.data.dishArray[0].ways);
        this.setData(this.data);
      },
      fail: () => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  videoErrorCallback: function (e) {
    console.log('视频错误信息:' + e.detail.errMsg);
  },

  ontapped: function () {
    wx.login({
      success: (res) => {
        if (res.code) {
          wx.request({
            url: config.service.loginUrl,
            data: {
              code: res.code
            },
            success: (res) => {
              this.data.userInfo = res.data;
              console.log(this.data.userInfo);
              this.setData(this.data);
              wx.request({
                url: config.service.getFavourite,
                method: "POST",
                data: {
                  openid: this.data.userInfo["openid"],
                  dishId: this.data.dishId
                }
              });
            }
          })
        }
      }
    })
  }
})