const mysql = require('mysql')
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'oasislove',
  port: 3306,
  multipleStatements: true,
  charset: 'UTF8MB4_GENERAL_CI',
})
module.exports = db
