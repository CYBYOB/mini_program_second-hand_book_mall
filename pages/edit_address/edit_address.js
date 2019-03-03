// pages/edit_address/edit_address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '初始王二',
    phone: '初始123456789',
    address: '初始西安电子科技大学海棠宿舍楼'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(JSON.parse(options.address_info))
    var address_info = JSON.parse(options.address_info);
    this.setData({
      name: address_info.name,
      phone: address_info.phone,
      address: address_info.address,      
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