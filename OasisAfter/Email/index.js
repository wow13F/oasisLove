const nodeemail = require('nodemailer')
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
    to: '2503248646@qq.com',
    subject: '测试主题',
    text: 'hello 2503248646@qq.com,我是wy邮箱',
    html: '<h1>Hello word</h1>',
  })
  console.log(info)
}
main().catch(console.error())
module.exports = main
