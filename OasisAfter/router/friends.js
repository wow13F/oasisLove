const express = require('express')
const router = express.Router()
const friend_handler = require('../router_handler/friends_handler')
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/userImages')
  },
  filename: function (req, file, cb) {
    let type = file.originalname.replace(/.+\./, '.')

    cb(null, req.user.userid + 'lv' + type)
  },
})
let upload = multer({ storage: storage })

//自定义中间件
function cache(req, res, next) {
  res.setHeader('Expires', new Date(Date.now() + 3000 * 1000).toGMTString())
  res.setHeader('Cache-Control', 'max-age=10')

  next()
}

router.post('/friendsSearch', friend_handler.friendsSearch)
router.post('/home', friend_handler.home)
router.post('/tipMessage', friend_handler.tipMessage)
router.get('/homeList', friend_handler.homeList)
router.post('/getUserInfo', friend_handler.getUserInfo)
router.post('/upuserImg', upload.array('file', 10), friend_handler.upuserImg)
router.post('/updateUserInfo', friend_handler.updateUserInfo)
router.post('/updatepwd', friend_handler.updatepwd)
router.post('/getonetoone', friend_handler.getonetoone)
router.post('/UpdatetipMessage', friend_handler.UpdatetipMessage)
router.post('/addfriend', friend_handler.addfriend)
router.post('/findrequest', friend_handler.findrequest)
router.post('/userrequest', friend_handler.userrequest)
router.post('/delrquest', friend_handler.delrquest)
router.post('/agreerquest', friend_handler.agreerquest)
router.post('/delfriend', friend_handler.delfriend)
router.post('/getAllFriends', friend_handler.getAllFriends)
module.exports = router
