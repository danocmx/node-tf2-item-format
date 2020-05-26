const _ = require('lodash');

const Attributes = require('./parseString/Attributes');
const decomposeName = require('./parseString/decomposeName');

/**
 * Parses name string into attributes.
 */
module.exports = function (name) {
	const attributes = new Attributes(name);
	const itemName = decomposeName(name, attributes);

	return {
		name: itemName,

		craftable: attributes.craftable,

		// Only when present.
		...(attributes.australium ? { australium: attributes.australium } : {}),
		...(attributes.festivized ? { festivized: attributes.festivized } : {}),
		...(attributes.killstreak ? { killstreak: attributes.killstreak } : {}),
		...(attributes.wear ? { wear: attributes.wear } : {}),
		...(attributes.texture ? { texture: attributes.texture } : {}),
		...(attributes.effect ? { effect: attributes.effect } : {}),

		// Incase they're not present
		...(!_.isEmpty(attributes.usableItem) ? attributes.usableItem : {}),
		...(!_.isEmpty(attributes.itemNumber) ? { itemNumber: attributes.itemNumber } : {}),

		quality: attributes.quality.value,
		...(attributes.quality.elevated ? { elevated: attributes.quality.elevated } : {}),
	};
};
