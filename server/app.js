const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Sequelize = require("sequelize");
const config = require("./config");
const request = require("request");

// function baiduReq(url) {
//   return new Promise(resolve => {
//     request(url, function(error, response, body) {
//       console.log("error:", error); // Print the error if one occurred
//       console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//       console.log("body:", body); // Print the HTML for the Google homepage.
//       resolve(body);
//     });
//   });
// }

const app = new Koa();
app.use(
  bodyParser({
    enableTypes: ["json", "form", "text"]
  })
);

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});

const router = require("./routes");
// router.get("/login", async (ctx, next) => {
//   // ctx.response.body = "init data";
//   let code = ctx.request.query["code"];
//   let url = "";
//   url = "http://api.weixin.qq.com/sns/jscode2session?appid=";
//   url += config.weapp.appid;
//   url += "&secret=";
//   url += config.weapp.appSecret;
//   url += "&js_code=";
//   url += code;
//   url += "&grant_type=authorization_code";
//   // url = "http://www.baidu.com";
//   // ctx.response.body = await asyncReq("url");
//   ctx.response.body = await baiduReq(url);
// });
app.use(router.routes());

app.listen(5757);
