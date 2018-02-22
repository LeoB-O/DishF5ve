const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Sequelize = require('sequelize');
const config = require('./config');


const app = new Koa();
app.use(bodyParser());

app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

const router = require('./routes');
app.use(router.routes());


app.listen(5757);