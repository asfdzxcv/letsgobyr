var Database=require('../../utils/database.js')
Page({
  
  /**
  * 页面的初始数据
  */

  data: {
    
    ground:[],
  tab: [{
   title: '拼车广场',
   id: 0
  },
  {
   title: '我的拼车',
   id: 1
  },
   {title:"个人中心",
id:2
}
  ],
  idx: 0, //默认选中第一项
   
   
  },
   
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    var that=this;
    function set(data){
      console.log("回调");
      that.setData({
        ground:data
      })
      console.log(that.data.ground)
    }
   Database.ShareInfoGet(0,set);
   wx.cloud.callFunction({
    name: 'wxlogin',
    complete: res => {
      console.log('callFunction test result: ', res)
    }
  })
  },
  onShow(){
    var that=this;
    function set(data){
      console.log("回调");
      that.setData({
        ground:data
      })
      console.log(that.data.ground)
    }
   Database.ShareInfoGet(0,set);
  },
  // tab
  todetail:function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.id)
    var url='../detail/detail?id='+e.currentTarget.dataset.id
    wx.navigateTo({
      url: url,
    })
  },
  tab(e) {
  let that = this;
  let index = e.currentTarget.dataset.index;
  that.setData({
   idx: index,
  })
   
  }
 })