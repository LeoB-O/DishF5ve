const Sequelize = require('sequelize');
const sequelize = require('../config').sequelize;

module.exports = sequelize.define('catagory', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  cataName: Sequelize.TEXT,
  cataDetail: Sequelize.TEXT('long'),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT,
  imageUrl: Sequelize.TEXT,
  type: Sequelize.TEXT
}, {
    timestamps: false,
    tableName: "catagory_dish"
  });