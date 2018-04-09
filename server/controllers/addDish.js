const dishDetails = require('../models/dishDetails.js')

module.exports = async (ctx, next) => {
  dishDetails.findOrCreate({
    where: {
      dishName: ctx.request.body.dishName,
      videoUrl: ctx.request.body.videoUrl,
      audioUrl: ctx.request.body.audioUrl,
      imageUrl: ctx.request.body.imageUrl,
      type: ctx.request.body.type,
      createdAt: 0,
      updatedAt: 0,
      version: 0,
      materials: ctx.request.body.materials,
      ways: ctx.request.body.ways
    }
    });

}