const catagoryList = require('../models/catagoryList');

module.exports = async (ctx, next) => {
	var catagorys = await catagoryList.findAll();
	var result = [];
	for (let c of catagorys) {
		result.push(c.toJSON());
	}
	ctx.response.body = JSON.stringify(result);
}