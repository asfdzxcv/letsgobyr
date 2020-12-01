// pages/detail/detail.js
var Database=require('../../utils/database.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    detail:{

    }
  },
confirm:function(){
  function suc(){
    wx.showToast({
      title: '加入成功',
    })
    function back(){
        wx.navigateTo({
            url: '../index/index',
          })
    }
    setTimeout(back,2000)
    
}
console.log(this.data.id)
Database.Memberadd(this.data.id,suc);
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    this.setData({
      id:options.id,
    })
    function setdata(info){
      console.log(info);
      that.setData({
        detail:info
      })
    }
    Database.GetInfobyId(options.id,setdata)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReaDy: function () {

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