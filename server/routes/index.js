const router = require('koa-router')({
  prefix: '/weapp'
});
const controllers = require('../controllers');

router.get('/', async (ctx, next) => {
	ctx.response.body = 'test index';
	console.log(ctx.response.body);
});

router.get('/catagory', controllers.getCatagoryList);
router.get('/dishDetails', controllers.getDishDetails);

module.exports = router;