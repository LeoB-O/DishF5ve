const Sequelize = require('sequelize');

var mysql = {
	database: 'DBName', // 使用哪个数据库
    username: 'userName', // 用户名
    password: 'passwd', // 口令
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