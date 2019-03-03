// pages/my_point/my_point.js
// 获取小程序实例，便于访问全局变量
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    point: -1,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    // 数据异步更新，需要这样操作， 大坑呀 23333
    var that = this;

    wx.request({
      url: 'http://www.520cyb.cn/mini/book_shop/page_my_point.php',
      data: {
        user_id: app.globalData.user_id,
      },
      success(res) {
        // console.log('从数据库中读取到的积分值为：')
        // console.log(res.data[0]['point'])
        that.setData({
          point: res.data[0]['point']
        })
      }
    })
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