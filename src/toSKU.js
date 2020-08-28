const schema = require('./schema');

/**
 * Most borrowed from https://github.com/Nicklason/node-tf2-sku/blob/master/index.js
 * Added our functionalities.
 */
module.exports = function (item) {
	let sku = `${getDefindex(item)};${schema.getQualityEnum(item.quality)}`;

	if (item.effect) {
		sku += `;u${schema.getEffectEnum(item.effect)}`;
	}
	if (item.australium) {
		sku += ';australium';
	}
	if (!item.craftable) {
		sku += ';uncraftable';
	}
	if (item.wear) {
		sku += `;w${schema.getWearEnum(item.wear)}`;
	}
	if (item.texture) {
		sku += `;pk${schema.getTextureEnum(item.texture)}`;
	}
	if (item.elevated) {
		sku += ';strange';
	}
	if (item.killstreak && item.killstreak !== 0) {
		sku += `;kt-${schema.getKillstreakEnum(item.killstreak)}`;
	}
	if (item.target) {
		sku += `;td-${schema.getDefindex(item.target)}`;
	}
	if (item.festive) {
		sku += ';festive';
	}

	if (item.itemNumber) {
		if (item.itemNumber.type === 'craft') {
			sku += `;n${item.itemNumber.value}`;
		} else if (item.itemNumber.type === 'crate') {
			sku += `;c${item.itemNumber.value}`;
		}
	}

	if (item.output) {
		sku += `;od-${schema.getDefindex(item.output)}`;
	}
	if (item.outputQuality) {
		sku += `;oq-${schema.getQualityEnum(item.outputQuality)}`;
	}

	return sku;
};

function getDefindex(item) {
	return item.defindex || schema.getDefindex(item.name);
}
