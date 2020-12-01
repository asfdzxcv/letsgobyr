var Database=require('../../utils/database.js')
var wxMarkerData = [];

Page({
    index:0,
    data: {
        gender:0,
        start:0,
        end:0,
        time:0,
        other:0,
        num:0,
        array: ['不限性别', '只限女生', '只限男生'],

    },
    startinput:function(e){
        this.setData({
            start:e.detail.value
        })
    },
    endinput:function(e){
        this.setData({
            end:e.detail.value
        })
    },
    timeinput:function(e){
        this.setData({
            time:e.detail.value
        })
    },
    numlim:function(e){
        this.setData({
            num:e.detail.value
        })
    },
    otherinput:function(e){
        this.setData({
            other:e.detail.value
        })
    },
    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          gender: e.detail.value,
          
        })
      },
      confirm:function(){
          if(!this.data.start||!this.data.end||!this.data.time||!this.data.num){
              wx.showToast({
                title: '请完善信息',
                icon:'none'
              })
              return;
          }

        let temp={
            Gerder:this.data.gender,
            pos_s:this.data.start,
            pos_e:this.data.end,
            num:1,
            State:0,
            time:this.data.time,
            limit:this.data.num,
            other:this.data.other
        }
        console.log(temp);
    Database.Routeadd(temp,suc)   ;   
    function suc(){
        wx.showToast({
          title: '发起成功',
        })
        function back(){
            wx.navigateTo({
                url: '../index/index',
              })
        }
        setTimeout(back,2000)
        
    }
      },
    onLoad: function() {
    }
})