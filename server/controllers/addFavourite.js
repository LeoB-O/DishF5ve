const favourite = require("../models/favourite.js");

module.exports = async (ctx, next) => {
  favourite.findOrCreate({
    where: {
      openid: ctx.request.body.openid,
      dishId: ctx.request.body.dishId,
      createdAt: 0,
      updatedAt: 0
    }
  });
  ctx.response.body = {
      success: true,
      data:{}
  }
};
