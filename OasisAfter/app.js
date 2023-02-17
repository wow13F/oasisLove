const express = require('express')
const path = require('path')
const app = express()
const joi = require('@hapi/joi')

// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件，这个中间件只能解析 application/x-www-form-urlencoded 格式的数据
app.use(express.urlencoded({ extended: false }))

// 封装一个全局中间件，返回失败的结果
app.use((req, res, next) => {
  // err 的值可能是一个错误对象，也可能是一个错误描述的字符串
  res.cc = function (err, status = 0) {
    res.send({
      status,
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 配置解析token中间件
const expressJwt = require('express-jwt')
const config = require('./config')
app.use(expressJwt({ secret: config.jwtSecretKey, algorithms: ['HS256'] }).unless({ path: [/^\/api/, /^\/static/, /^\/userImages/, /^\/chatImages/, /^\/groupImages/, /^\/chatMp3s/, /^\/chatFiles/] }))
app.use(express.json({ limit: '2100000kb' }))
// 导入并使用用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

// 导入并使用好友路由模块
const friendRouter = require('./router/friends')
app.use('/my', friendRouter)

// 导入并使用群聊路由模块
const groupRouter = require('./router/group')
app.use('/group', groupRouter)

// 导入并注册文件上传路由模块
const uploadFileRouter = require('./router/uploadFile')
app.use('/upload', uploadFileRouter)

// 导入并注册视频模块路由模块
const videoModelRouter = require('./router/videoModel')
app.use('/video', videoModelRouter)

// 定义错误级别的中间件
app.use((err, req, res, next) => {
  // 验证失败导致的错误
  if (err instanceof joi.ValidationError) {
    return res.cc(err)
  }

  // token 认证失败后的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败')
  // 未知的错误
  res.cc(err)
})
// 导入并注册发送邮件模块

//app.use(sendMail)
var server = app.listen(8082)
var io = require('socket.io').listen(server)
// 导入socket.js
require('./websocket/index.js')(io)

require('./LIVE/index')(app)
app.use(express.static(path.join(__dirname, 'public')))
// 启动监听服务
app.listen(3007, () => {
  console.log('api serve running at http://192.168.137.1:3007')
})
