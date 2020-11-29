Page({
  
  /**
  * 页面的初始数据
  */
  data: {
    goout:[
      {time:"2020.11.29 13:30",
      pos_s:"沙河校区",
      pos_e:"昌平区医院"
    },
    {time:"2020.11.29 13:30",
    pos_s:"沙河校区",
    pos_e:"昌平区医院"
  },
  {time:"2020.11.29 13:30",
  pos_s:"沙河校区",
  pos_e:"昌平区医院"
}
    ],
    goschool:[1,2,3,4,5],
    random:[1,2,3,4,5],
  tab: [{
   title: '离校',
   id: 0
  },
  {
   title: '返校',
   id: 1
  },
  {
   title: '其他',
   id: 3
  },
   
  ],
  idx: 0, //默认选中第一项
   
   
  },
   
  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
   
  },
  // tab
  tab(e) {
  let that = this;
  let index = e.currentTarget.dataset.index;
  that.setData({
   idx: index,
  })
   
  }
 })