// pages/collect/collect.js
// 获取小程序实例，方便访问全局变量
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    collect_list: [
      { src: '../../images/collect/good.png', title: '高等数学（下）陕西教育出版社', price: '15.00', num: 1 },
      { src: '../../images/collect/good.png', title: '高等数学（下）陕西教育出版社', price: '15.00', num: 1 },
      { src: '../../images/collect/good.png', title: '高等数学（下）陕西教育出版社', price: '15.00', num: 1 },
      { src: '../../images/collect/good.png', title: '高等数学（下）陕西教育出版社', price: '15.00', num: 1 },
    ]
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
    // 解决小程序数据异步更新问题
    var that = this;

    wx.request({
      url: 'http://www.520cyb.cn/mini/book_shop/page_my_collect.php',
      data: {
        user_id: app.globalData.user_id,
      },
      success(res) {
        console.log('从数据中获取到的 收藏列表结果：')
        console.log(res.data)
        that.setData({
          collect_list: res.data
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