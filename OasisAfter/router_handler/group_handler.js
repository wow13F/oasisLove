const db = require('../db/index')

const config = require('../config')

// 创建群聊的处理函数
exports.creategroup = (req, res) => {
  const Info = req.body
  Info.userinfo = JSON.parse(Info.userinfo)
  Info.ids = JSON.parse(Info.ids)
  Info.ids.push(Info.userinfo)
  let suijiid = ''
  while (true) {
    // Math.random()  生成随机数字, eg: 0.123456
    // .toString(36)    转化成36进制 : "0.4fzyo82mvyr"
    // .slice(-8); 截取最后八位 : "yo82mvyr"
    suijiid = Math.random().toString(36).slice(-8)
    if (suijiid) {
      break
    }
  }

  //console.log('lv' + req.user.userid + suijiid)
  const qID = 'lv' + req.user.userid + suijiid
  let data = {
    qunid: qID,
    userid: req.user.userid,
    qunimg: Info.qunimg,
    qunname: Info.qname,
    createtimes: Info.createtimes,
  }
  //res.send(Info)
  let sqlStr = 'insert into qun set?'
  db.query(sqlStr, data, (err, results) => {
    // 执行sql 语句失败
    if (err) {
      // return res.send({ status: 0, message: err.message })
      return res.cc(err)
    }

    if (results.affectedRows == 0) {
      return res.cc('创建群聊失败')
    }

    let cylist = []
    for (let i = 0; i < Info.ids.length; i++) {
      cylist.push([qID, req.user.userid, Info.ids[i].friendid, Info.qunimg, Info.qname, Info.ids[i].friendnicname, Info.ids[i].friendimg])
    }
    //console.log(cylist)
    let sqlstr2 = 'insert into qunmanager (qunid,qunadminID,chengyuanid,qunimg,qunname,chengyuannicname,chengyuanimg) values ?'
    db.query(sqlstr2, [cylist], (err, request2) => {
      if (err) return res.cc(err)
      if (request2.affectedRows == 0) return res.cc('插入失败')
      res.send('okfdf')
    })
  })
}

// 获取所有好友
exports.getfriends = (req, res) => {
  let sqlStr = 'select * from friends where userid =?'
  db.query(sqlStr, req.user.userid, (err, results) => {
    // 执行sql 语句失败
    if (err) {
      // return res.send({ status: 0, message: err.message })
      return res.cc(err)
    }

    if (results.length == 0) {
      // return res.send({ status: 1, message: '用户名被占用' })
      return res.cc('当前用户还没有好友!')
    }
    let sqlstr2 = 'select * from friends where friendid =? limit 1'
    db.query(sqlstr2, req.user.userid, (err, results2) => {
      if (err) return res.cc(err)

      results.push(results2[0])
      res.send(results)
    })
  })
}

exports.uploadgroupimg = (req, res) => {
  let filePath = req.files[0].path
  filePath = filePath.replace(/public\\/, '')
  filePath = filePath.replace(/\\/, '/')
  filePath = 'http://192.168.137.1:3007/' + filePath
  //'http://192.168.137.1:3007/' +
  //console.log('174行' + filePath)
  res.send(filePath)
}

exports.groupList = (req, res) => {
  let sql = 'SELECT qunid FROM qunmanager WHERE chengyuanid=? OR qunadminID=? GROUP BY qunid'
  db.query(sql, [req.user.userid, req.user.userid], (err, request1) => {
    if (err) return res.cc(err)
    if (request1.length == 0) return res.cc('未找到群聊')
    //console.log(request1)

    let groupids = []
    for (let i = 0; i < request1.length; i++) {
      groupids.push(request1[i].qunid)
    }
    let sql2 = `SELECT * FROM qun WHERE FIND_IN_SET(qunid,'${groupids}')`
    db.query(sql2, (err, request2) => {
      if (err) return res.cc(err)
      if (request2.length == 0) return res.cc('未找到')
      let sql3 = `SELECT * FROM ( SELECT * FROM onetomore WHERE FIND_IN_SET(qunid,'${groupids}') ORDER BY times DESC LIMIT 999999) a WHERE FIND_IN_SET(qunid,'${groupids}') GROUP BY qunid 
      `
      db.query(sql3, (err, request3) => {
        if (err) return res.cc(err)
        //if (request3.length == 0) return res.cc(1, '没有聊天记录')
        res.send({ groupinfo: request2, lastmessage: request3 })
      })
    })
  })
}

exports.getonetomore = (req, res) => {
  let qunid = req.body.friendid // friendid 值为群聊id 与好友一对一聊天记录共用
  let sum = Number(req.body.sum) // 每页数量
  let ofSet = Number(req.body.ofSet)
  ofSet = (ofSet - 1) * sum // 偏移量
  //console.log(typeof ofSet)
  //console.log(typeof sum)
  let messageList = []
  let fasongzeids = []
  let sql1 = 'SELECT chengyuanid FROM qunmanager WHERE qunid =?'
  db.query(sql1, qunid, (err, request9) => {
    if (err) return res.cc(err)
    for (let i = 0; i < request9.length; i++) {
      if (request9[i].chengyuanid != req.user.userid) {
        fasongzeids.push(request9[i].chengyuanid)
      }
    }

    //console.log(friendid)

    let sqlMsgCount = 'SELECT count(*) as Count  FROM onetomore  WHERE qunid=? '
    db.query(sqlMsgCount, qunid, (err, requestMsgCount) => {
      if (err) return res.cc(err)
      // if (requestMsgCount == 0) return res.cc('没有聊天记录', 1)
      //console.log(requestMsgCount[0].Count)

      var sqlLimit = 'SELECT * FROM (SELECT * FROM onetomore WHERE qunid=? ORDER BY times DESC limit ?,?)a'

      // ----------------------------------
      db.query(sqlLimit, [qunid, ofSet, sum], (err, request) => {
        if (err) return res.cc(err)

        if (request.length > 0) {
          for (let i = 0; i < request.length; i++) {
            messageList.push(request[i])
            //fasongzeids.push(request[i].userid)
            // 别人发给我的消息
            //console.log(request[i].friendid)
            //console.log(req.user.userid)
            if (request[i].userid == req.user.userid) {
              request[i].sf = 'W'
            } else {
              request[i].sf = 'T'
            }
          }
          //res.send({ states: 1, messageInfo: messageList, myid: req.user.userid, Count: requestMsgCount[0].Count })
          //console.log(request)
        }
        //console.log('166行' + fasongzeids)
        //console.log(fasongzeids)
        //console.log('168行' + fasongzeids)
        //let sql2 = `SELECT user.userid,user.user_img,user.nicName,friends.friendremarks FROM USER LEFT JOIN friends ON user.userid = friends.friendid WHERE friends.userid=${req.user.userid} AND FIND_IN_SET(friends.friendid,'${fasongzeids}')`
        let sql2 = `select chengyuanid as 'userid',chengyuanimg as 'user_img',chengyuannicname as 'nicName'  from qunmanager where qunid='${qunid}' and FIND_IN_SET(chengyuanid,'${fasongzeids}')`
        //let sql2 = `SELECT user.userid,user.user_img,user.nicName FROM USER WHERE FIND_IN_SET(userid,'${fasongzeids}')`
        db.query(sql2, (err, request2) => {
          if (err) return res.cc(err)
          if (request2.lengths == 0) res.cc('未找到好友信息', 1)
          //console.log(messageList)
          res.send({ states: 1, friendInfo: request2, messageInfo: messageList, myid: req.user.userid, Count: requestMsgCount[0].Count })
        })
      })

      //----------------------------------
    })
  })
}

// 获取群聊信息
exports.groupDetail = (req, res) => {
  let sqlStr = 'select * from qun where qunid =?'
  db.query(sqlStr, req.body.qunid, (err, results) => {
    // 执行sql 语句失败
    if (err) {
      // return res.send({ status: 0, message: err.message })
      return res.cc(err)
    }

    let sqlstr2 = 'select * from qunmanager where qunid =? limit 19'
    db.query(sqlstr2, req.body.qunid, (err, results2) => {
      if (err) return res.cc(err)

      res.send({ groupInfo: results, managerInfo: results2 })
    })
  })
}

// 更新群信息
exports.updateGroupInfos = (req, res) => {
  let sqlStr = 'update qun set qunname=? where qunid=?'
  let sqlStr2 = 'update qunmanager set chengyuannicname=? where qunid=? and chengyuanid=?'
  //console.log(req.body)

  db.query(sqlStr2, [req.body.chengyuannicname, req.body.qunid, req.body.userid], (err, results) => {
    if (err) return res.cc(err)
    if (results.affectedRows == 1) {
      if (req.body.sf == 'admin') {
        db.query(sqlStr, [req.body.qunname, req.body.qunid], (err, request1) => {
          if (err) return res.cc(err)
          if (request1.affectedRows == 1) {
            let sql3 = 'update qunmanager set qunname=? where qunid=?'
            db.query(sql3, [req.body.qunname, req.body.qunid], (err, request3) => {
              if (err) return res.cc(err)
              res.send({ states: 1, message: '更新成功!管理员' })
            })
          }
        })
      } else {
        res.send({ states: 1, message: '更新成功!普通' })
      }
    }
  })
}

// 移除群聊成员
exports.deletemanager = (req, res) => {
  console.log(req.body)
  let sql = ''
  let sql2 = ''
  let sql3 = ''
  if (req.body.delje == 'admin') {
    sql = `DELETE FROM qunmanager WHERE qunid='${req.body.qunid}'`
    sql2 = `DELETE FROM onetomore WHERE qunid='${req.body.qunid}' `
    sql3 = `DELETE FROM qun WHERE qunid='${req.body.qunid}'`
  } else {
    sql = `DELETE FROM qunmanager WHERE qunid='${req.body.qunid}' and chengyuanid='${req.body.chengyuanid}'`
    sql2 = `DELETE FROM onetomore WHERE qunid='${req.body.qunid}' and userid='${req.body.chengyuanid}' `
    sql3 = `select * FROM qun WHERE qunid='${req.body.qunid}'`
  }

  db.query(sql, [req.body.qunid, req.body.chengyuanid], (err, request) => {
    if (err) return res.cc(err)

    db.query(sql2, [req.body.qunid, req.body.chengyuanid], (err, request2) => {
      if (err) return res.cc(err)
      db.query(sql3, (err, request3) => {
        if (err) return res.cc(err)
        res.send(request3)
      })
    })
  })
}

// 搜索群聊成员
exports.searchemanager = (req, res) => {
  let sql = `select * from qunmanager where qunid=? and chengyuannicname LIKE "%${req.body.chengyuannicname}%"`
  db.query(sql, req.body.qunid, (err, request) => {
    if (err) return res.cc(err)
    res.send({ request: request })
  })
}

exports.isfriend = (req, res) => {
  let sql2 = 'select * from friends where userid=? and friendid=?'
  if (req.user.userid == req.body.friendid) {
    res.send({ status: 1, isme: true, isfriend: true })
  } else {
    db.query(sql2, [req.user.userid, req.body.friendid], (err, request2) => {
      if (err) return res.cc(err)
      if (request2.length == 0) return res.send({ status: 1, message: '当前用户不是你的好友', isfriend: false, isme: false })

      console.log(request2)

      res.send({ status: 1, request2, isfriend: true, isme: false })
    })
  }
}
exports.adduser = (req, res) => {
  console.log(req.body)
  let idList = JSON.parse(req.body.idList)

  let sql1 = `select * from user where FIND_IN_SET(userid,'${idList}')`
  db.query(sql1, (err, request1) => {
    if (err) return res.cc(err)
    if (request1.length > 0) {
      let userinfoList = []
      console.log(request1)
      for (i = 0; i < request1.length; i++) {
        userinfoList.push([req.body.qunid, req.body.userid, request1[i].userid, req.body.qunimg, req.body.qunname, request1[i].nicName, request1[i].user_img])
      }
      let sql2 = 'insert into qunmanager (qunid,qunadminID,chengyuanid,qunimg,qunname,chengyuannicname,chengyuanimg) values ?'
      db.query(sql2, [userinfoList], (err, request2) => {
        if (err) return res.cc(err)
        if (request2.affectedRows > 0) {
          res.send({ states: 1, message: 200 })
        }
      })
    }
  })
}
