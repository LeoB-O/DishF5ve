const Sequelize = require('sequelize');
const sequelize = require('../config').sequelize;

module.exports = sequelize.define('advertise', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  imageUrl: Sequelize.TEXT
}, {
    timestamps: false,
    tableName: "advertise"
  });