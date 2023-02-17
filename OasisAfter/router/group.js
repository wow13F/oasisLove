const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const group_handler = require('../router_handler/group_handler')
const multer = require('multer')

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/groupImages')
  },
  filename: function (req, file, cb) {
    let type = file.originalname.replace(/.+\./, '.')
    let t = new Date().getTime()
    cb(null, req.user.userid + 'Qlv' + t + type)
  },
})
//自定义中间件
function cache(req, res, next) {
  res.setHeader('Expires', new Date(Date.now() + 3000 * 1000).toGMTString())
  res.setHeader('Cache-Control', 'max-age=10')

  next()
}
let upload = multer({ storage: storage })
router.post('/creategroup', group_handler.creategroup)
router.get('/getfriends', group_handler.getfriends)
router.post('/uploadgroupimg', upload.array('file', 10), group_handler.uploadgroupimg)
router.post('/groupList', group_handler.groupList)
router.post('/getonetomore', group_handler.getonetomore)
router.post('/groupDetail', group_handler.groupDetail)
router.post('/updateGroupInfos', group_handler.updateGroupInfos)
router.post('/deletemanager', group_handler.deletemanager)
router.post('/searchemanager', group_handler.searchemanager)
router.post('/isfriend', group_handler.isfriend)
router.post('/adduser', group_handler.adduser)
module.exports = router
