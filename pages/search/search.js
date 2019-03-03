// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 搜索的历史记录 列表
    history_list: ['高等数学', '高等物理', '大学英语', '线性代数', '计算机组成与原理', '计算机网络与数据通信', '编译原理'],

    // 提交搜索所需的参数
    keyword: '',

    // 查询结果
    result_list: []
  },


  // 自定义函数
  // 关键字不断输入并更新
  f_keyword_input: function(e) {
    this.setData({
      keyword: e.detail.value
    })
    console.log(this.data.keyword)
  },

  // 提交搜索关键字，在数据库中进 “模糊行搜索” ==> like %?%  语句？？ 优化？？
  f_keyword_comfirm: function(e) {
    var that =this;

    if(this.data.keyword.length == 0) {
      wx.showToast({
        title: '关键字不能为空！',
        icon: 'none'
      })
      return;
    }

    // 输入关键字不为空，可以进行如下操作
    wx.request({
      url: 'https://www.520cyb.cn/mini/book_shop/f_keyword_comfirm.php',
      data: {
        keyword: this.data.keyword
      },
      success(res) {
        console.log(res)
        console.log(res.data)
        
        that.setData({
          result_list: res.data
        })
      }
    })
  },

  // 点击了某个搜索 记录
  f_history_item_tap: function(e) {
    // console.log(e._relatedInfo.anchorTargetText)
    // 记下 所点击的历史记录中的书名
    var name = e._relatedInfo.anchorTargetText;
    this.setData({
      keyword: name
    })
    
    console.log(this.data.keyword)
    // 发起查询请求
    this.f_keyword_comfirm(e)
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