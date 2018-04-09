var request = require("request");
var config = require("../config.js");

// var asyncReq = url => {
//   return new Promise(resolve => {
//     request(url, function(error, response, body) {
//       resolve(body);
//     });
//   });
// };

function asyncReq(url) {
  return new Promise(resolve => {
    request(url, function(error, response, body) {
      resolve(body);
    });
  });
}

var login = async (ctx, next) => {
  ctx.response.body = "init data";
  let code = ctx.request.query["code"];
  let url = "";
  url = "https://api.weixin.qq.com/sns/jscode2session?appid=";
  url += config.weapp.appid;
  url += "&secret=";
  url += config.weapp.appSecret;
  url += "&js_code=";
  url += code;
  url += "&grant_type=authorization_code";
  ctx.response.body = await asyncReq(url);
};

module.exports = {
  login: login
};
