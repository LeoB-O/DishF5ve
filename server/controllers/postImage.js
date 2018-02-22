var multer = require('koa-multer');
var upload = multer({dest: './uploads'});
var fun = (ctx, next) => {
  console.log(ctx.req.file);
}

module.exports = {
  upload: upload,
  fun: fun
}