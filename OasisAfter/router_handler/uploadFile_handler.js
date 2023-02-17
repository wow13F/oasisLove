const multer = require('multer')
var fs = require('fs')
const db = require('../db/index')
exports.uploadImg = (req, res) => {
  let filePath = req.files[0].path
  filePath = filePath.replace(/public\\/, '')
  filePath = filePath.replace(/\\/, '/')
  filePath = filePath.replace(/\\/, '/')

  let times = req.body.times
  let friendid = req.body.friendid
  friendid = Number(friendid)
  let sf = req.body.chatSF
  let type = req.body.fileType
  let result = ''

  var dataInfo = {
    userid: req.user.userid,
    messageTxt: null,
    messageImg: null,
    messageMp3: null,
    messageMp4: null,
    messageFile: null,
    messageTYPE: 2,
    isRead: 1,
    times: times,
  }
  if (type === 'img') {
    dataInfo.messageImg = 'http://192.168.137.1:3007/' + filePath
    result = dataInfo.messageImg
  } else {
    dataInfo.messageFile = 'http://192.168.137.1:3007/' + filePath
    dataInfo.messageTYPE = 5
    dataInfo.messageFileName = req.body.UserFileName
    dataInfo.size = req.body.size
    result = dataInfo.messageFile
  }
  console.log('23行--聊天类型', sf)
  //console.log(friendid, times)

  let sql = ''
  if (sf == 'group') {
    dataInfo.qunid = req.body.qunid
    sql = 'INSERT INTO onetomore set?'
  } else {
    dataInfo.sendTYPE = 1
    dataInfo.friendid = friendid
    sql = 'INSERT INTO onetoone set?'
  }

  console.log(dataInfo)

  db.query(sql, dataInfo, (err) => {
    if (err) return res.cc(err)
  })
  let obj = { filePath: result, fileName: req.body.UserFileName }
  obj = JSON.stringify(obj)
  res.send(obj)
}

exports.uploadMp3 = (req, res) => {
  let filePath = req.files[0].path
  filePath = filePath.replace(/public\\/, '')
  filePath = filePath.replace(/\\/, '/')
  filePath = filePath.replace(/\\/, '/')
  res.send(filePath)
}

exports.uploadFile = (req, res) => {
  // let filePath = req.files[0].path
  // filePath = filePath.replace(/public\\/, '')
  // filePath = filePath.replace(/\\/, '/')
  // filePath = filePath.replace(/\\/, '/')
  // res.send(filePath)
}
