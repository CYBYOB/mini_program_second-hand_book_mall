// pages/login/login.js
// 获取小程序实例，方便设置全局变量，所以不用加上 const
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },



  // 自定义函数， 获取授权 ==》 openid
  f_get_user_info: function(e) {
    console.log(e)
    // 用户点击了 授权的取消键
    if(e.detail.user_info) {
      wx.showToast({
        title: '授权了才能更好体验哦！',
        icon: 'none'
      })
      return;
    }

    // 用户点击了授权，可进行如下操作
    // 设置用户最基本的全部信息
    app.globalData.user_info = e.detail.user_info;
    wx.login({
      success(res) {
        console.log(res)
      }
    })
  },
  f_f: function(e) {
    console.log(e.detail.userInfo)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 查看是否授权
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
              console.log(res.userInfo)
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