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
router.get('/dishDetails/id/:id', controllers.getDishById);
router.get('/dishDetails/type/:type', controllers.getDishByCata);
router.get('/dishDetails/name/:name', controllers.getDishByName);
router.get('/advertise/', controllers.getAdvertiseList);


router.post('/', controllers.postImage.upload.single('test'), controllers.postImage.fun);
router.post('/dishDetails', controllers.addDish);
module.exports = router;