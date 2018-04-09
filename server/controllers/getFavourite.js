const favourite = require('../models/favourite');

module.exports = async (ctx, next) => {
  let openid = ctx.request.query['openid'];
  var favourites = await favourite.findAll({
    where: {
      openid: openid
    }
  });
  var result = [];
  for (let c of favourites) {
    result.push(c['dishId']);
  }
  ctx.response.body = JSON.stringify(result);
}