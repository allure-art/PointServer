var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let user=req.query;
  let inform={
    username:"用户名是："+username,
    password:"密码："+password
  }
  res.send(到达了登录界面);
});

module.exports = router;
