const catagoryList = require('../models/catagoryList');
const catagoryList_dish = require('../models/catagoryList_dish.js')
const catagoryList_time = require('../models/catagoryList_time.js')

module.exports = async (ctx, next) => {
	var catagorys = await catagoryList_dish.findAll();
	var result = [];
  result.push(new Object());
  result[0].type = "菜系分类";
  result[0].detailArray = [];
	for (let c of catagorys) {
		result[0].detailArray.push(c.toJSON());
	}
  var catagorys = await catagoryList_time.findAll();
  result.push(new Object());
  result[1].type = "时间分类";
  result[1].detailArray = [];
  for (let c of catagorys) {
    result[1].detailArray.push(c.toJSON());
  }
	ctx.response.body = JSON.stringify(result);
}