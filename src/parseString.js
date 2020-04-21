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
		australium: attributes.australium,
		festivized: attributes.festivized,

		killstreak: attributes.killstreak,
		wear: attributes.wear,
		effect: attributes.effect,
		texture: attributes.texture,

		itemNumber: attributes.itemNumber,

		// Incase they're not present
		...(_.isEmpty(attributes.usableItem) ? attributes.usableItem : {}),
		
		...attributes.quality,
	};
};
