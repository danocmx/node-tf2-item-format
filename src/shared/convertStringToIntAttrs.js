const schema = require('../schema/Schema');

module.exports = function (item) {
	return {
		...item,
		killstreak: schema.getKillstreak(item.killstreak),
		wear: schema.getWear(item.wear),
		texture: schema.getTexture(item.texture),
		effect: schema.getEffect(item.effect),
		quality: schema.getQuality(item.quality),
	};
};
