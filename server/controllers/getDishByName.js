const dishDetail = require('../models/dishDetails');

module.exports = async (ctx, next) => {
  var dishDetails = await dishDetail.findAll({
    where: {
      dishName: {
        '$like': `%${ctx.params.name}%`
      }
    }
  });
  var result = [];
  for (let c of dishDetails) {
    result.push(c.toJSON());
  }
  ctx.response.body = JSON.stringify(result);
}