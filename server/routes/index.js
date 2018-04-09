const router = require("koa-router")({
  prefix: "/weapp"
});
const controllers = require("../controllers");
const request = require("request");

function asyncReq(url) {
  return new Promise(resolve => {
    request(url, function(error, response, body) {
      resolve(body);
    });
  });
}

router.get("/", async (ctx, next) => {
  ctx.response.body = "test index";
  console.log(ctx.response.body);
});

router.get("/catagory", controllers.getCatagoryList);
router.get("/dishDetails", controllers.getDishDetails);
router.get("/dishDetails/id/:id", controllers.getDishById);
router.get("/dishDetails/type/:type", controllers.getDishByCata);
router.get("/dishDetails/name/:name", controllers.getDishByName);
router.get("/advertise/", controllers.getAdvertiseList);
router.get("/login", controllers.login.login);
// router.get("/login", async (ctx, next) => {
//   ctx.response.body = "init data";
//   let code = ctx.request.query["code"];
//   let url = "";
//   // url = "http://api.weixin.qq.com/sns/jscode2session?appid=";
//   // url += config.weapp.appid;
//   // url += "&secret=";
//   // url += config.weapp.appSecret;
//   // url += "&js_code=";
//   // url += code;
//   // url += "&grant_type=authorization_code";
//   url = "http://www.baidu.com";
//   ctx.response.body = await asyncReq("url");
// });

router.post(
  "/",
  controllers.postImage.upload.single("test"),
  controllers.postImage.fun
);
router.post("/dishDetails", controllers.addDish);
module.exports = router;
