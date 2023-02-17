const express = require('express')
const router = express.Router()
// 导入验证数据的中间件
const express_joi = require('@escook/express-joi')
const { reg_login_schema } = require('../schema/user')

// 导入用户路由处理函数对应的模块
const user_handler = require('../router_handler/user')

router.post('/reguser', user_handler.regUser)

router.post('/login', user_handler.login)

router.post('/isUser', user_handler.isUser)

router.post('/sendnumber', user_handler.sendnumber)

router.post('/respPwd', user_handler.respPwd)

router.post('/allUserManager', user_handler.allUser_Manager)

router.post('/replaceUserImg', user_handler.replaceUserImg)

module.exports = router
