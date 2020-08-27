const isEmpty = require('lodash/isEmpty');
const schema = require('./schema/Schema');

const Attributes = require('./parseString/Attributes');
const decomposeName = require('./shared/decomposeName');

/**
 * Parses name string into attributes.
 * @param {string} name
 * @param {object} options
 * @param {boolean} inNumbers specifies if you want response in corresponding enums.
 */
module.exports = function (name, { inNumbers = false, useDefindexes = false } = {}) {
	let attributes = new Attributes(name);
	const itemName = decomposeName(name, attributes);

	if (inNumbers) attributes = convert(attributes);

	let defindexes = {};
	if (useDefindexes) {
		defindexes = getDefindexes(name, attributes);
		attributes.usableItem = defindexes.usableItem;
	}

	return {
		name: itemName,
		craftable: attributes.craftable,


		...(defindexes.defindex ? { defindex: defindexes.defindex } : {}),
		// Signalizes if `The` was in name.
		...(attributes.isUniqueHat ? { isUniqueHat: true } : {}),

		// Only when present.
		...(attributes.australium ? { australium: attributes.australium } : {}),
		...(attributes.festivized ? { festivized: attributes.festivized } : {}),
		...(attributes.killstreak ? { killstreak: attributes.killstreak } : {}),
		...(attributes.wear ? { wear: attributes.wear } : {}),
		...(attributes.texture ? { texture: attributes.texture } : {}),
		...(attributes.effect ? { effect: attributes.effect } : {}),

		// Incase they're not present
		...(!isEmpty(attributes.usableItem) ? attributes.usableItem : {}),
		...(!isEmpty(attributes.itemNumber) ? { itemNumber: attributes.itemNumber } : {}),

		quality: attributes.quality.value,
		...(attributes.quality.elevated ? { elevated: attributes.quality.elevated } : {}),
	};
};

function convert(item) {
	return {
		...item,
		killstreak: schema.getKillstreak(item.killstreak),
		wear: schema.getWear(item.wear),
		texture: schema.getTexture(item.texture),
		effect: schema.getEffect(item.effect),
		quality: {
			value: schema.getQuality(item.quality.value),
			elevated: item.quality.elevated,
		},
	};
}

function getDefindexes(name, attributes) {
	const target = attributes.usableItem.target ? schema.getDefindex(attributes.target) : null;
	const output = attributes.usableItem.output ? schema.getDefindex(attributes.output) : null;
	const outputQuality = attributes.usableItem.outputQuality
		? schema.getQuality(attributes.usableItem.outputQuality)
		: null;

	return {
		defindex: schema.getDefindex(name),
		usableItem: {
			target,
			output,
			outputQuality,
		},
	};
}
