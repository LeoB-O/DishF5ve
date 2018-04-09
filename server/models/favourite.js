const Sequelize = require("sequelize");
const sequelize = require("../config").sequelize;

module.exports = sequelize.define(
  "favourite",
  {
    openid: {
      type: Sequelize.STRING(50),
      primaryKey: true
    },
    dishId: Sequelize.STRING(50),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT
  },
  {
    timestamps: false,
    tableName: "favourite"
  }
);
