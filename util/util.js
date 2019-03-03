// 根据点击不同的学院进入不同的页面
function f_page_by_academic(academic_id) {
   wx.navigateTo({
     url: '../../pages/academic/academic?academic_id=' + academic_id,
   })
 }

// 根据点击不同的书籍进入不同的页面
function f_navigate_to_good(good_id) {
  // console.log('util:' + good_id)
  wx.navigateTo({
    url: '../../pages/good/good?good_id=' + good_id,
  })
}

 module.exports = {
   f_page_by_academic: f_page_by_academic,
   f_navigate_to_good: f_navigate_to_good
 }