const express = require('express')
const router = express.Router()

// 导入视频模块路由处理函数对应的模块
const videoModel_handler = require('../router_handler/videoModel_handler')

router.get('/getComments', videoModel_handler.getComments)
router.post('/setComment', videoModel_handler.setComment)
//router.post('/uploadVideo', videoModel_handler.uploadVideo)
module.exports = router
