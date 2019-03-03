// pages/academic/academic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    academic_id: '',
    academic_good_list: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      academic_id: options.academic_id
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
    var that = this;

    console.log('学院id' + this.data.academic_id)
    wx.request({
      url: 'http://www.520cyb.cn/mini/book_shop/page_by_academic.php',
      data: {
        academic_id: this.data.academic_id,
      },
      success(res) {
        console.log('按学院进入的搜索结果：')
        console.log(res)
        that.setData({
          academic_good_list: res.data
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