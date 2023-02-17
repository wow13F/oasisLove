const express = require('express')
const router = express.Router()
const upload_handler = require('../router_handler/uploadFile_handler')
var fs = require('fs')
var multer = require('multer')

var createFolder = function (folder) {
  try {
    // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
    // 如果文件路径不存在将会抛出错误"no such file or directory"
    fs.accessSync(folder)
  } catch (e) {
    // 文件夹不存在，以同步的方式创建文件目录。
    fs.mkdirSync(folder)
  }
  return 0
}

//multer.diskStorage()方法 允许用户自定义文件存放路径和 文件名称。
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    createFolder(req.body.filepath)
    cb(null, req.body.filepath)
  },
  filename: function (req, file, cb) {
    let type = file.originalname.replace(/.+\./, '.')
    req.body.UserFileName = file.originalname
    cb(null, file.originalname + '_' + req.body.time + type)
  },
})
let upload = multer({ storage: storage })

router.post('/chatImg', upload.array('file', 10), upload_handler.uploadImg)
router.post('/chatMp3', upload.array('file', 10), upload_handler.uploadMp3)
router.post('/chatFile', upload.array('file', 10), upload_handler.uploadImg)
module.exports = router
