const cloud = require('wx-server-sdk')
exports.main = (event, context) => {
  // 这里获取到的 openId、 appId 和 unionId 是可信的，注意 unionId 仅在满足 unionId 获取条件时返回
  let { OPENID, APPID, UNIONID } = cloud.getWXContext()
  const db=wx.clould.database().collection('user');
  var logined=db.where({
    _id:OPENID
  }).get({
    success:function(res){
      console.log("用户存在");
      return res.data[0]
    },
    failed:function(res){
      db.add({
        data:{
          _id:OPENID,

        },
        success:function(res){
          console.log("注册成功")
          return res.data[0]
        }
      })
    }
  })

}