// pages/dish-list.js
var image = require('../image/image.js')

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
        image: image.sichuan
      },
      {
        id: 2,
        dishName: "粤菜",
        dishDetail: "hahahahah",
        image: image.guangdong
      },
      {
        id: 3,
        dishName: "湘菜",
        dishDetail: "hahahaha",
        image: ""
      }
    ],
    listName: "分类"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    switch (options.id * 1) {
      case 0:
        this.setData({ listName: "菜系分类" });
        break;
      case 1:
        this.data.dishArray[0].dishName = "火锅";
        this.data.dishArray[1].dishName = "腊肠";
        this.data.dishArray[2].dishName = "蛇皮怪";
        this.data.listName = "川菜";
        this.setData(this.data);
        break;
      case 2:
        this.data.dishArray[0].dishName = "火锅";
        this.data.dishArray[1].dishName = "腊肠";
        this.data.dishArray[2].dishName = "蛇皮怪";
        this.data.listName = "粤菜";
        this.setData(this.data);
        break;
      case 3:
        this.data.dishArray[0].dishName = "火锅";
        this.data.dishArray[1].dishName = "腊肠";
        this.data.dishArray[2].dishName = "蛇皮怪";
        this.data.listName = "湘菜";
        this.setData(this.data);
        break;
      case 4:
        this.data.dishArray[0].dishName = "火锅";
        this.data.dishArray[1].dishName = "腊肠";
        this.data.dishArray[2].dishName = "蛇皮怪";
        this.data.listName = "早餐";
        this.setData(this.data);
        break;
      case 5:
        this.data.dishArray[0].dishName = "火锅";
        this.data.dishArray[1].dishName = "腊肠";
        this.data.dishArray[2].dishName = "蛇皮怪";
        this.data.listName = "午餐";
        this.setData(this.data);
        break;
      case 6:
        this.data.dishArray[0].dishName = "火锅";
        this.data.dishArray[1].dishName = "腊肠";
        this.data.dishArray[2].dishName = "蛇皮怪";
        this.data.listName = "晚餐";
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