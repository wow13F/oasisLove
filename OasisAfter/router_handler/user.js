const db = require('../db/index')
const cipher = require('../websocket/config.js')
const nodeemail = require('nodemailer')
// 导入 bcryptjs 包（对明文进行加密）
const bcryptjs = require('bcryptjs')

// 导入生成token的包
const jwt = require('jsonwebtoken')

const config = require('../config')
const { id } = require('@hapi/joi/lib/base')

// 注册用户的处理函数
exports.regUser = (req, res) => {
  const userInfo = req.body
  // console.log(userInfo)

  let sqlStr = 'select * from user where username=?'
  db.query(sqlStr, userInfo.username, (err, results) => {
    // 执行sql 语句失败
    if (err) {
      // return res.send({ status: 0, message: err.message })
      return res.cc(err)
    }

    // 判断用户名是否被占用
    if (results.length > 0) {
      // return res.send({ status: 1, message: '用户名被占用' })
      return res.cc('用户名被占用')
    }

    // 执行到这里就表示用户名可以使用
    // 然后对密码进行加密处理，调用 bcrpytjs.hashSync()方法加密
    userInfo.password = bcryptjs.hashSync(userInfo.password, 10)
    let sql = 'insert into user set?'
    db.query(sql, { username: userInfo.username, password: userInfo.password, email: userInfo.email }, (err, result) => {
      if (err) {
        // return res.send({ status: 0, message: err.message })
        return res.cc(err)
      }
      if (result.affectedRows !== 1) {
        // return res.send({ status: 0, message: '注册失败,请稍后再试' })
        return res.cc('注册失败,请稍后再试')
      }

      // 注册成功
      // res.send({ status: 1, message: '注册成功' })
      let sql2 = 'select userid from user where username=?'
      db.query(sql2, userInfo.username, (err, result2) => {
        if (err) return res.cc(err)
        if (result2.length < 1) return res.cc('查找失败')
        let user = { ...result2[0], password: '', user_img: '' }
        //console.log(user)
        let toketStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
          isreguser: true,
          status: 1,
          message: '注册成功',
          token: 'Bearer ' + toketStr,
        })
      })
    })
  })
}

// 用户登录的处理函数
exports.login = (req, res) => {
  let userInfo = req.body
  let sql = 'select userid,password,user_img,username from user where username=? or email=?'
  db.query(sql, [userInfo.username, userInfo.username], (err, results) => {
    if (err) return res.cc(err)
    if (results.length != 1) return res.cc('用户名或密码错误')
    // 开始验证密码是否正确
    let isok = bcryptjs.compareSync(userInfo.password, results[0].password)
    if (!isok)
      return res.send({
        status: 1,
        message: '用户名或密码错误',
        isLogin: false,
      })

    // 用户名和密码正确后就可以生成Token了
    let user_img = results[0].user_img
    let username = results[0].username
    let id = results[0].userid
    let user = { ...results[0], password: '', user_img: '' }
    //console.log(user)
    let toketStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
    //let jmh = bcryptjs.hashSync('lv' + user.userid, 10)
    //let jmh = aesutil.encrypted('lv' + user.userid, '0123456789abcdef', '0123456789abcdef')
    let jmh = ''
    cipher.encrypt('lv' + user.userid, function (result) {
      // console.log(result)
      jmh = result
    })

    setTimeout(function () {
      res.send({
        isLogin: true,
        status: 1,
        message: '登录成功',
        token: 'Bearer ' + toketStr,
        user_img: user_img,
        username: username,
        id: id,
        jmh: jmh,
      })
    }, 500)
  })
}

// 验证用户名是否被占用
exports.isUser = (req, res) => {
  let userInfo = req.body
  let sql = 'select username from user where username=?'
  db.query(sql, userInfo.username, (err, results) => {
    if (err) return res.cc(err)
    if (results.length == 1) return res.send({ status: 1, message: '用户名被占用', isu: 'no' })
    res.send({
      status: 1,
      message: '用户名可用',
      isu: 'yes',
    })
  })
}

// 发送验证码
exports.sendnumber = (req, res) => {
  let str = ''
  for (let i = 0; i < 6; i++) {
    str = str + Math.round(Math.random() * 10).toString()
  }
  main(req.body.to, req.body.subject, str)

  async function main(to, subject, html) {
    let transporter = nodeemail.createTransport({
      host: 'smtp.163.com',
      secureConnection: true,
      port: 465,
      secure: true,
      auth: {
        user: 'wy2503248646@163.com',
        pass: 'UPKXFOQUGNSUOQEI',
      },
    })
    let info = await transporter.sendMail({
      from: 'wy2503248646@163.com',
      to: to,
      subject: subject,
      text: '您好,欢迎使用绿洲之恋',
      html: `<p>您的验证码为:(验证码有效期为: 1分钟)<br><h1>${str}</h1></p>`,
    })
    //console.log(info)
  }
  res.send({ request: str })
}

// 忘记密码
exports.respPwd = (req, res) => {
  let password = req.body.pwd
  password = bcryptjs.hashSync(password, 10)
  //console.log(password, req.body.email)
  let sql = 'update user set password = ? where email =?'
  db.query(sql, [password, req.body.email], (err, result) => {
    if (err) return res.cc(err)
    if (result.affectedRows == 1) res.send({ state: 1, message: '重置密码成功 ' })
  })
}

// 获取所有用户
exports.allUser_Manager = (req, res) => {
  let sql = 'select userid,username,user_img from user'

  db.query(sql, (err, result) => {
    if (err) return res.cc(err)
    res.send({ state: 1, message: '查询所有用户成功 ', result: result })
  })
}

//替换违规用户的头像
exports.replaceUserImg = (req, res) => {
  let sql = 'UPDATE USER SET user_img = ? WHERE userid = ? '
  let userInfo = req.body
  db.query(sql, [userInfo.url, userInfo.userid], (err, result) => {
    if (err) return res.cc(err)
    if (result.affectedRows === 1) res.send({ state: 1, message: '替换违规头像成功 ', result: result })
  })
}
