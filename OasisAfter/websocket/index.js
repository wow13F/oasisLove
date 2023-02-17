const cipher = require('./config.js')
const db = require('../db/index')
const upload = require('../src/upload/uploadFile')
var friendid //一对一接收者id
var users = []
var rooms = [] // 所有的房间id
module.exports = function (io) {
  io.on('connection', (socket) => {
    //console.log('socket 连接成功')

    // 接收客户端传过来的id,房间id
    socket.on('clientMsg', (data, roomId) => {
      cipher.decrypt(data, function (result) {
        result = result.substring(2, result.length) // 用户id

        socket.name = result
        let i = (users || []).findIndex((pro) => pro.userid === socket.name)
        if (i == -1) {
          users.push({ userid: result, socketid: socket.id })
        } else {
          users[i].socketid = socket.id
        }
      })
      //socket.join('someroom')
      if (roomId) {
        for (let i = 0; i < roomId.length; i++) {
          socket.join(roomId[i], function () {
            rooms.push(roomId[i])
          })
        }
      }
      let set = new Set(rooms)
      rooms = [...set]
      // console.log('39行')
      //console.log('rooms:', rooms)

      // 触发广播事件 除了自己其他人都能收到
      //socket.broadcast.emit('hi')
    })

    // 监听客户端发送的 文本、位置 消息
    socket.on('messageText', (data, to, groupids) => {
      to = to.toString()
      console.log('53行', to, data.chatTYPE)
      // console.log(groupids)
      let sql = 'INSERT INTO onetoone set?'
      let dataGroup = new Object()
      dataGroup = JSON.stringify(data)
      dataGroup = JSON.parse(dataGroup)

      if (data.chatTYPE === 'group') {
        sql = 'INSERT INTO onetomore set?'
        dataGroup.qunid = to
        delete dataGroup.chatTYPE
        delete dataGroup.sendTYPE
        //console.log(dataGroup, '群聊消息')
        db.query(sql, dataGroup, (err, request) => {
          if (err) return
          if (request.affectedRows == 1) {
            console.log('保存到数据库成功')
            let sql2 = 'select * from user where userid=?'
            db.query(sql2, data.userid, (err, request2) => {
              if (err) return
              dataGroup.user_img = request2[0].user_img
              console.log(rooms, to)
              socket.broadcast.to(to).emit('connectToRoom', dataGroup)
            })
          }
        })
      } else {
        dataGroup.friendid = to
        delete dataGroup.chatTYPE
        db.query(sql, dataGroup, (err, request) => {
          if (err) return

          if (request.affectedRows > 0) {
            console.log('保存到数据库成功')
            let index = (users || []).findIndex((pro) => pro.userid === to)
            if (index != -1) {
              socket.to(users[index].socketid).emit('oneToOne', data)
            }
          }
        })
      }
    })

    // 将用户发送给好友的图片 或者 发送的文件  响应到好友客户端
    socket.on('messageIMG', (data) => {
      if (data.qunid) {
        let sql2 = 'select * from user where userid=?'
        db.query(sql2, data.userid, (err, request2) => {
          if (err) return
          data.user_img = request2[0].user_img

          socket.broadcast.to(data.qunid).emit('connectToRoom', data)
        })
      } else {
        let index = (users || []).findIndex((pro) => pro.userid === data.friendid)
        if (index != -1) {
          console.log('找到了好友')
          console.log(users[index].socketid)

          socket.to(users[index].socketid).emit('oneToOne', data)
        }
      }
    })

    //
    socket.on('addfriend', (data) => {
      let index = (users || []).findIndex((pro) => pro.userid === data.reqid)
      if (index != -1) {
        socket.to(users[index].socketid).emit('friendRequest', data)
      }
    })

    socket.on('livepush', (friendId, offer, fasongzeid, type, mediaType) => {
      let socketId = ''
      friendId = friendId.trim()
      users.forEach((item) => {
        if (item.userid === friendId) {
          socketId = item.socketid
        }
      })
      if (socketId.length > 0) {
        if (type === 'live') {
          console.log('live')
          socket.to(socketId).emit('liveplay', { friendId: friendId, offer: offer, fasongzeid: fasongzeid, type: type, mediaType: mediaType })

          setTimeout(() => {
            socket.to(socketId).emit('offerFromLive', { friendId: friendId, offer: offer, fasongzeid: fasongzeid, type: type, mediaType: mediaType })
          }, 500)
        } else {
          socket.to(socketId).emit('waitplay', { friendId: friendId, offer: offer, fasongzeid: fasongzeid, type: type, mediaType: mediaType })
        }
      }
    })
    socket.on('pushAnswer', (jiesouzheid, answer, fasongzeid) => {
      jiesouzheid = jiesouzheid.trim()
      let index = (users || []).findIndex((pro) => pro.userid === jiesouzheid)

      if (index != -1) {
        socket.to(users[index].socketid).emit('onAnswer', { jiesouzheid: jiesouzheid, answer: answer, fasongzeid: fasongzeid })
      }
    })

    socket.on('pushCandidate', (jiesouzheid, Candidate, fasongzeid) => {
      jiesouzheid = jiesouzheid.trim()
      let index = (users || []).findIndex((pro) => pro.userid === jiesouzheid)
      if (index != -1) {
        console.log('Candidate', Candidate)
        socket.to(users[index].socketid).emit('onCandidate', { jiesouzheid: jiesouzheid, Candidate: Candidate, fasongzeid: fasongzeid })
      }
    })
    socket.on('MediaInfos', (jiesouzheid, faqizheid, type, message) => {
      jiesouzheid = jiesouzheid.trim()
      let index = (users || []).findIndex((pro) => pro.userid === jiesouzheid)
      if (index != -1) {
        socket.to(users[index].socketid).emit('CloseInfos', jiesouzheid, faqizheid, type, message)
      }
      // console.log(data)
    })
    // 客户端离开
    socket.on('disconnect', (e) => {
      // console.log(users)
      let Index = (users || []).findIndex((pro) => pro.userid === socket.name)
      //console.log(Index)
      if (Index != -1) {
        users.splice(Index, 1)
        //console.log(users)
      }
      // console.log('一个客户端离开' + e)
    })
  })
}

// 向客户端发送信息（测试代码定时向客户端发送信息）
// setInterval(function () {
//   io.emit('test1', { name: '我是服务器' })
// }, 5000)

//开启端口监听socket
