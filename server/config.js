const Sequelize = require('sequelize');

var mysql = {
  database: 'dish', // 使用哪个数据库
  username: 'root', // 用户名
  password: 'BslLbbMjl5482()$', // 口令
  host: 'localhost', // 主机名
  port: 3306 // 端口号，MySQL默认3306
};


var sequelize = new Sequelize(mysql.database, mysql.username, mysql.password, {
    host: mysql.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});


module.exports = { mysql, sequelize };