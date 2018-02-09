// pages/dish-list.js
var config = require('../../config.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dishNum: 10,
    dishArray: [
      {
        id: 1,
        dishName: "川菜",
        dishDetail: "hahahahah",
        imageUrl: ''
      }
    ],
    listName: "分类"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    switch (options.type) {
      case 'catagory':
        this.setData({ listName: "菜系分类" });
        wx.request({
          url: config.service.getCatagoryList,
          success: (res) => {
            this.data.dishArray = res.data;
            this.setData(this.data);
          }
        })
        break;
      case 'dish':
        this.data.listName = options.cataName;
        this.setData(this.data);
        break;
      
    }
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