const Sequelize = require('sequelize');
const sequelize = require('../config').sequelize;

module.exports = sequelize.define('dishDetail', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  dishName: Sequelize.STRING(100),
  videoUrl: Sequelize.STRING(100),
  audioUrl: Sequelize.STRING(100),
  imageUrl: Sequelize.STRING(100),
  type: Sequelize.STRING(50),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
    timestamps: false
  });