//const COS = require('cos-js-sdk-v5')
const db = require('../db/index')
//获取评论
exports.getComments = (req, res) => {
  let data = req.query
  let sql, params

  if (data && data.videoID && data.floorID) {
    sql = 'select * from layer where videoID =? and floorID =?'
    params = [data.videoID, data.floorID]
  } else {
    sql = 'select floor.videoID,floor.floorID,floormanagerID,floortext,floorimg,floornicname,floor.time,count(layerID) as cznums from floor LEFT JOIN layer on floor.videoID=layer.videoID and floor.floorID=layer.floorID where floor.videoID=? group by floor.floorID'
    params = 'aaa'
  }

  db.query(sql, params, (err, result) => {
    if (err) return res.cc(err)
    res.send({ state: 1, comments: result })
  })
}
//发布评论
exports.setComment = (req, res) => {
  let data = JSON.parse(req.body.data)
  let sql, params
  console.log('获取到数据', data)
  if (data && data.type.trim() === 'LZ') {
    data.floormanagerID = req.user.userid
    sql = 'insert into floor (videoID,floormanagerID,floortext,floorimg,floornicname,time) values(?,?,?,?,?,?)'
    params = [data.videoID, data.floormanagerID, data.floortext, data.floorimg, data.floornicname, data.time]
  } else {
    sql = 'insert into layer (videoID,floorID,layerID,layertext,layerimg,layernicname,sendto,time) values(?,?,?,?,?,?,?,?)'
    data.layerID = req.user.userid
    params = [data.videoID, data.floorID, data.layerID, data.layertext, data.layerimg, data.layernicname, data.sendto, data.time]
  }

  // console.log(data)
  db.query(sql, params, (err, result) => {
    if (err) return res.cc(err)
    if (result.affectedRows > 0) {
      res.send({ state: 1, message: '评论成功' })
    }
  })
}

// exports.uploadVideo = (req, res) => {
//   console.log(123)

//   console.log(req.body.data)
//   let cos = new COS({
//     SecretId: 'SECRETID',
//     SecretKey: 'SECRETKEY',
//   })
//   cos.putObject(
//     {
//       Bucket: 'oasislove-1312712813' /* 必须 */,
//       Region: 'ap-beijing' /* 存储桶所在地域，必须字段 */,
//       Key: req.body.data /* 必须 */,
//       StorageClass: 'STANDARD',
//       Body: req.body.data, // 上传文件对象
//       onProgress: function (progressData) {
//         console.log(JSON.stringify(progressData))
//       },
//     },
//     function (err, data) {
//       console.log(err || data)
//     }
//   )
// }
