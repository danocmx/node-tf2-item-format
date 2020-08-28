const schema = require('../schema');

module.exports = function (item) {
	return {
		...item,
		killstreak: schema.getKillstreakEnum(item.killstreak),
		wear: schema.getWearEnum(item.wear),
		texture: schema.getTextureEnum(item.texture),
		effect: schema.getEffectEnum(item.effect),
		quality: schema.getQualityEnum(item.quality),
	};
};
