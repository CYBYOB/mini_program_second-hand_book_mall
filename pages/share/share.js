// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // good 的具体参数应该由上一个页面传过来，在 onload 页面进行值的更改！
    good: {
      src: '../../images/share/good.png',
      price: 15,
      title: '高等数学（下）陕西教育出版社'
    },

    share_icon: [
      { src: '../../images/share/weixin.png', title: '微信' },
      { src: '../../images/share/qq.png', title: 'QQ' },
      { src: '../../images/share/weibo.png', title: '微博' },
      { src: '../../images/share/link.png', title: '复制链接' },
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