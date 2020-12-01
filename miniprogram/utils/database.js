//状态值注释
//State：0-表示人员未满 1-表示人员已满 2-表示行程过期 3-表示行程取消
//Gender:0-表示男 1-表示女
const db =wx.cloud.database();
const app=getApp();
var currentUser=app.globalData.currentUser;
function UserInfoAdd(){
db.collection("user").add({
data:{
    BasicInfo:{currentUser},
    TrueName:{Name},
    TrueId:{TrueId},
},
success: function(res){
  console.log("SSSSS");
}
})
}
function Routeadd(res,fn){
  var User_first=currentUser;
  var Gender=res.Gender;
  var State=res.State;
  var time=res.time;
  var pos_s=res.pos_s;
  var pos_e=res.pos_e;
  var num=res.num;
  var limit=res.limit;
  var other=res.other;
  db.collection("share").add({
    data:{
      User_first:User_first,
      Gender:Gender,
      time:time,
      pos_s:pos_s,
      pos_e:pos_e,
      State:State,
      num:num,
      limit:limit,
      other:other
    },
     failed:function(){},
    success: function(){
      fn();
      console.log("Success");
    }
  })
};
function Memberadd(id,fn){
  var temp;
  var that=this;
  db.collection("share").where({
    _id:id
  }).get({
    success:function(res){
      console.log(res.data);
      if(res.data[0].num==res.data[0].limit-1){
        console.log("人数将满");
        db.collection("share").doc(id).update({
          data:{
            State:1,
            num:res.data[0].num+1
          },
          success: function(res) {
            console.log("numaddsuccess")
            fn();
          }
        })
      }
      else{
        console.log("人数未满")
        db.collection("share").doc(id).update({
          data:{
            num:res.data[0].num+1
          },
          success: function(res) {
            console.log("success")
            fn();
          },
          failed:function(){
            console.log("filed");
          }
        })
      }
  }
  })
  

};
function ShareInfoGet(s,fn){
  let that=this;
  var data={};
  const db = wx.cloud.database()
  db.collection("share").where({
      State:s
  }).get({
    success:function(res){
      that.data=res.data
      console.log("getinfoseccuss");
      console.log(res.data)
      fn(res.data)
    }
  });
  
  return data;
  
}

function RouteCancel(openid){
db.collection("share").where({
    openid:{openid}
}).update({
    State:"3"
})
}

function wxlogin(){
  wx.login({
    complete: (res) => {

      console.log(res)
    },
  })
}

function GetInfobyId(id,fn){
  var that=this;
  const db = wx.cloud.database()
  db.collection("share").doc(id).get({
    success:function(res){
      that.data=res.data
      console.log("getoneshareinfoseccuss");
      console.log(res.data)
      fn(res.data)
    }
  });
}
module.exports.Routeadd=Routeadd;
module.exports.Memberadd=Memberadd;
module.exports.UserInfoAdd=UserInfoAdd;
module.exports.ShareInfoGet=ShareInfoGet;
module.exports.wxlogin=wxlogin;
module.exports.GetInfobyId=GetInfobyId;

