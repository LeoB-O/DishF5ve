// pages/favourite.js
var config = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    favourite: [],
    dishList: [],
    listName: "我的收藏"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
              this.setData(this.data);
              wx.request({
                url: config.service.getFavourite,
                data: {
                  openid: this.data.userInfo["openid"]
                },
                success: (res) => {
                  this.data.favourite = res.data;
                  this.setData(this.data);
                  for(let f of this.data.favourite) {
                    console.log(config.service.getDishById + f);
                    wx.request({
                      url: config.service.getDishById + f,
                      success: (res) => {
                        this.data.dishList.push(res.data[0]);
                        this.setData(this.data);
                      }
                    })
                  }
                }
              })
            }
          })
        }
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

  }
})