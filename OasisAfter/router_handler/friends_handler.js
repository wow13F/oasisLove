// const { result } = require('@hapi/joi/lib/base')
// const { request } = require('express')
const bcryptjs = require('bcryptjs')
const { string } = require('joi')
const jwt = require('jsonwebtoken')
const config = require('../config')
const db = require('../db/index')

exports.friendsSearch = (req, res) => {
  let userInfo = req.body
  // console.log(userInfo)
  let sql = 'select * from user where username like ? and userid != ?'
  db.query(sql, ['%' + userInfo.username + '%', req.user.userid], (err, requests) => {
    if (err) return res.cc(err)

    if (requests.length == 0) return res.send({ status: 1, message: '未找到', search: userInfo.username, requests: [] })

    // 查找当前登录用户的好友
    let sql2 = 'select friendid from friends where userid=?'
    db.query(sql2, req.user.userid, (err, request2) => {
      if (err) return res.cc(err)
      if (request2.length == 0) return res.send({ status: 1, message: '没有好友' })

      console.log(request2)
      for (let i = 0; i < requests.length; i++) {
        for (let j = 0; j < request2.length; j++) {
          if (requests[i].userid == request2[j].friendid) {
            requests[i].isfriend = true
            console.log(requests[i].isfriend)
          }
        }
      }
      res.send({ status: 1, requests })
    })
  })
}

exports.home = (req, res) => {
  res.send({ status: 1, message: '允许进入首页', agree: true })
}

// home首页 消息列表
exports.homeList = (req, res) => {
  let sql = 'SELECT user.user_img,user.username,friends.friendid ,user.nicName,friends.friendremarks,friends.isshow FROM USER INNER JOIN friends on friends.friendid=user.userid WHERE friends.userid=? AND friends.isshow=1'

  db.query(sql, req.user.userid, (err, request1) => {
    if (err) return res.cc(err)
    if (request1.length < 1) return res.send({ status: 1, message: '没有好友' })
    //res.send(request1)
    let sql1 = 'SELECT * FROM onetoone WHERE userid=? AND friendid=? OR userid=? AND friendid=?  ORDER BY times DESC limit 1'
    let ii = 1
    var idList = []
    for (let i = 0; i < request1.length; i++) {
      function ff(cb) {
        db.query(sql1, [req.user.userid, request1[i].friendid, request1[i].friendid, req.user.userid], function f(err, request2) {
          if (err) return res.cc(err)
          if (request2.length == 1) {
            if (request2[0].friendid == req.user.userid) {
              idList.push({ friendid: request2[0].userid, lastMessage: request2[0].messageTxt, messageTYPE: request2[0].messageTYPE, sf: 'T', time: request2[0].times, num: 0, user_img: '', nicName: '', friendremarks: '' })
            } else {
              idList.push({ friendid: request2[0].friendid, lastMessage: request2[0].messageTxt, messageTYPE: request2[0].messageTYPE, sf: 'W', time: request2[0].times, num: 0, user_img: '', nicName: '', friendremarks: '' })
            }
          }
          cb(idList)
        })
      }

      ff(function (result) {
        if (ii == request1.length) {
          res.send({ status: 1, fasongzeid: req.user.userid, message: '获取消息列表成功', requests: idList, request2: request1 })
        }
        ii += 1
      })
    }
  })
}
exports.tipMessage = (req, res) => {
  let response = []
  let sql = 'SELECT *,COUNT(*) as num  FROM onetoone WHERE friendid=? AND isRead=1  GROUP BY userid '
  db.query(sql, req.user.userid, (err, request) => {
    if (err) return res.cc(err)
    if (request.length == 0) return res.send({ lengths: 0, message: '没有最新消息', states: 1, request: [] })
    res.send({ states: 1, message: '获取未读消息成功', request: request })
    //console.log(request)
    //res.send(request)

    // 查找别人给我发的消息
    //let sql2 = 'select * from onetoone where friendid=?'
    // db.query(sql2, req.user.userid, (err, request2) => {
    //   if (err) return res.cc(err)
    //   if (request2.length < 1) return res.cc('没有聊天列表')
    //   let isReadLen = 0
    //   for (let i = 0; i < request2.length; i++) {
    //     if (request2[i].isRead == 0) {
    //       isReadLen += 1
    //     }
    //     request2[i].identity = 'T'
    //   }
    //   request2.isReadLen = isReadLen
    //   //console.log(request)

    //   response = [...request, ...request2]
    //   console.log(response)
    //   res.send({ status: 1, message: '获取成功', requests: response })
    // })
  })
}

// 用户上传头像
exports.upuserImg = (req, res) => {
  //console.log(req.files[0].path)
  let filePath = req.files[0].path
  filePath = filePath.replace(/public\\/, '')
  filePath = filePath.replace(/\\/, '/')
  console.log('174行' + filePath)
  let sql = 'update user set user_img=? where userid=?'
  db.query(sql, ['http://192.168.137.1:3007/' + filePath, req.user.userid], (err, request) => {
    if (err) return res.cc(err)
    if (request.affectedRows != 1) return res.cc('上传头像失败')
    res.send({ status: 1, message: '头像上传成功', path: 'http://192.168.137.1:3007/' + filePath })
  })
}

// 获取用户信息
exports.getUserInfo = (req, res) => {
  let user_id = req.body.userid

  console.log(user_id)
  let sql = 'select * from user where userid=?'
  //let sql = `select * from user where FIND_IN_SET(userid,'${user_id}')`
  if (user_id == 0) {
    user_id = req.user.userid
  } else {
    user_id = user_id
  }
  db.query(sql, user_id, (err, request) => {
    if (err) return res.cc(err)
    if (request.length != 1) return res.cc('获取用户信息失败')

    res.send({ states: 1, result: request, myid: req.user.userid })
  })
}

// 修改用户信息
exports.updateUserInfo = (req, res) => {
  let userinfo = req.body
  console.log(userinfo)
  let sql = 'update user set? where userid=?'
  db.query(sql, [userinfo, req.user.userid], (err, request) => {
    if (err) return res.cc(err)
    if (request.affectedRows != 1) return res.cc('更新用户信息失败')
    res.send({ states: 1, message: '更新用户信息成功' })
  })
}

exports.updatepwd = (req, res) => {
  let userinfo = req.body
  // console.log(userinfo)
  let sql = 'select userid,password from user where userid=?'

  db.query(sql, req.user.userid, (err, request) => {
    if (err) return res.cc(err)
    if (request.length != 1) return res.cc('查找失败')

    let isok = bcryptjs.compareSync(userinfo.password, request[0].password)
    if (isok) {
      userinfo.passwordNew = bcryptjs.hashSync(userinfo.passwordNew, 10)
      let sql2 = 'update user set password=? where userid=?'
      db.query(sql2, [userinfo.passwordNew, req.user.userid], (err, request2) => {
        if (err) return res.cc(err)
        if (request2.affectedRows != 1) return res.cc('密码修改失败')
        // 重新生成一次 token
        // let user = { ...request[0], password: '', user_img: '' }
        // console.log(user)
        // let toketStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({ states: 1, message: '修改密码成功', miyao: userinfo.passwordNew })
      })
    } else {
      res.send({ states: 1, message: '密码错误' })
    }
  })

  // let sql = 'update user set password=? where'
}

// 获取一对一聊天记录
exports.getonetoone = (req, res) => {
  let friendid = req.body.friendid
  let sum = Number(req.body.sum) // 每页数量
  let ofSet = Number(req.body.ofSet)
  ofSet = (ofSet - 1) * sum // 偏移量
  console.log(typeof ofSet)
  console.log(typeof sum)
  let sql1 = 'update onetoone set isRead=0 where userid=? and friendid=?'
  db.query(sql1, [friendid, req.user.userid], (err, request9) => {
    if (err) return res.cc(err)

    let messageList = []
    //console.log(friendid)

    let sqlMsgCount = 'SELECT count(*) as Count  FROM onetoone  WHERE userid=? AND friendid=? OR userid=? AND friendid=? '
    db.query(sqlMsgCount, [req.user.userid, friendid, friendid, req.user.userid, 1, 10], (err, requestMsgCount) => {
      if (err) return res.cc(err)
      if (requestMsgCount == 0) return res.cc('没有聊天记录', 1)
      //console.log(requestMsgCount[0].Count)
      if (requestMsgCount[0].Count < 100) {
        //console.log(123456)
        var sqlLimit = 'select * from onetoone where userid=? and friendid=? or userid=? and friendid=? ORDER BY times desc limit ?,?'
      }

      // ----------------------------------
      db.query(sqlLimit, [req.user.userid, friendid, friendid, req.user.userid, ofSet, sum], (err, request) => {
        if (err) return res.cc(err)
        //if (request.length == 0) res.cc('暂时没有聊天记录', 1)
        if (request.length > 0) {
          for (let i = 0; i < request.length; i++) {
            messageList.push(request[i])
            // 别人发给我的消息
            //console.log(request[i].friendid)
            //console.log(req.user.userid)
            if (request[i].friendid == req.user.userid) {
              request[i].sf = 'T'
            } else {
              //console.log('W')
              request[i].sf = 'W'
            }
          }
        }
        let sql2 = 'SELECT user.user_img,user.nicName,friends.friendremarks FROM USER LEFT JOIN friends ON user.userid = friends.friendid WHERE friends.userid=? AND friends.friendid=?'
        db.query(sql2, [req.user.userid, friendid], (err, request2) => {
          if (err) return res.cc(err)
          if (request2.lengths == 0) res.cc('未找到好友信息', 1)
          res.send({ states: 1, friendInfo: request2, messageInfo: messageList, myid: req.user.userid, Count: requestMsgCount[0].Count })
        })
      })

      //----------------------------------
    })
  })
}

exports.UpdatetipMessage = (req, res) => {
  let friendid = req.body.friendid
  let sql1 = 'update onetoone set isRead=0 where userid=? and friendid=?'
  db.query(sql1, [friendid, req.user.userid], (err, request) => {
    if (err) return res.cc(err)
    res.send('ok')
  })
}

exports.addfriend = (req, res) => {
  let friendid = req.body.friendid
  let sqlstr = 'select * from friendrequest where sendid=? and reqid=?'
  db.query(sqlstr, [req.user.userid, friendid], (err, requeststr) => {
    if (err) return res.cc(err)
    if (requeststr.length == 0) {
      let sql1 = 'insert into friendrequest value(?,?,?)'
      db.query(sql1, [req.user.userid, friendid, req.body.message], (err, request) => {
        if (err) return res.cc(err)
        if (request.affectedRows == 1) {
          let sql2 = 'select * from friendrequest where reqid=?'
          db.query(sql2, friendid, (err, request2) => {
            if (err) return res.cc(err)
            if (request2.length > 0) {
              res.send({ states: 1, message: req.body.message, request: request2 })
            }
          })
        }
      })
    } else {
      res.send({ states: 1, message: '已经申请,不要重复添加', type: 0 })
    }
  })
}

exports.findrequest = (req, res) => {
  let sql2 = 'select * from friendrequest where reqid=?'
  db.query(sql2, req.user.userid, (err, request2) => {
    if (err) return res.cc(err)
    if (request2.length > 0) {
      res.send({ states: 1, request: request2 })
    }
  })
}

exports.userrequest = (req, res) => {
  let ids = req.body.ids
  ids = JSON.parse(ids)

  console.log(ids)

  // let sql = 'select * from user where userid=?'
  let sql = `select * from user where FIND_IN_SET(userid,'${ids}')`
  db.query(sql, (err, request) => {
    if (err) return res.cc(err)
    if (request.length == 0) return res.cc('获取用户信息失败')
    res.send(request)
  })
}

// 删除好友请求
exports.delrquest = (req, res) => {
  let sql = 'delete from friendrequest where sendid=? and reqid=?'
  db.query(sql, [req.body.sendid, req.user.userid], (err, request) => {
    if (err) return res.cc(err)
    if (request.affectedRows == 1) return res.cc(1, '删除成功')
  })
}

// 同意好友请求
exports.agreerquest = (req, res) => {
  let sql = 'select * from user where userid=? or userid=?'
  db.query(sql, [req.body.sendid, req.user.userid], (err, request) => {
    if (err) return res.cc(err)
    if (request.length < 1) return res.cc(1, '申请者id未找到')
    let sql2 = 'insert into friends values ?'

    let cylist = []

    cylist.push([request[1].userid, request[0].userid, request[0].username, request[0].email, request[0].nicName, '1', request[0].nicName, request[0].user_img])
    cylist.push([request[0].userid, request[1].userid, request[1].username, request[1].email, request[1].nicName, '1', request[1].nicName, request[1].user_img])

    console.log(cylist)

    db.query(sql2, [cylist], (err, request2) => {
      if (err) return res.cc(err)
      if (request2.affectedRows == 2) {
        let sql3 = 'insert into onetoone set?'
        let time = new Date()

        let d = time.getTime()
        let s = time.getSeconds()
        let h = time.getHours()
        let m = time.getMinutes()
        let Y = time.getFullYear()
        let M = time.getMonth() + 1
        let D = time.getDate()

        if (h < 10) {
          h = '0' + h
        }
        if (m < 10) {
          m = '0' + m
        }
        if (s < 10) {
          s = '0' + s
        }
        if (D < 10) {
          D = '0' + D
        }
        if (M < 10) {
          M = '0' + M
        }
        let data = {
          userid: req.user.userid,
          friendid: req.body.sendid,
          messageTxt: '我们成为好友了,可以开始聊天了。',
          messageImg: null,
          messageMp3: null,
          messageMp4: null,
          messageTYPE: 1,
          isRead: 1,
          sendTYPE: 1,
          times: Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s,
        }
        console.log(data)
        db.query(sql3, data, (err, request3) => {
          if (err) return res.cc(err)
          if (request3.affectedRows == 1) {
            res.send('ok')
          }
        })
      }
    })
  })
}

// 删除好友
exports.delfriend = (req, res) => {
  let sql = 'delete from friends where userid=? and friendid=? or userid=? and friendid=?'
  db.query(sql, [req.user.userid, req.body.friendid, req.body.friendid, req.user.userid], (err, request) => {
    if (err) return res.cc(err)
    if (request.affectedRows > 0) {
      let sql2 = 'delete from onetoone where userid=? and friendid=? or userid=? and friendid=?'
      db.query(sql2, [req.user.userid, req.body.friendid, req.body.friendid, req.user.userid], (err, request2) => {
        if (err) return res.cc(err)
        if (request2.affectedRows > 0) {
          res.cc(1, '删除好友成功')
        }
      })
    }
  })
}

// 获取所有好友
exports.getAllFriends = (req, res) => {
  let sql = 'select * from friends where userid=?'
  db.query(sql, req.user.userid, (err, request) => {
    if (err) return res.cc(err)

    if (request.length > 0) {
      res.send({ states: 1, request: request })
    } else {
      res.send({ states: 1, request: 0 })
    }
  })
}
