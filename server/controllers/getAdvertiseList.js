const advertise = require('../models/advertise');

module.exports = async (ctx, next) => {
  var advertises = await advertise.findAll();
  var result = [];
  for (let c of advertises) {
    result.push(c.toJSON());
  }
  ctx.response.body = JSON.stringify(result);
}