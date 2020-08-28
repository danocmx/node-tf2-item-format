const isEmpty = require('lodash/isEmpty');
const schema = require('./schema/Schema');

const Attributes = require('./parseString/Attributes');

const decomposeName = require('./shared/decomposeName');
const convertStringToIntAttrs = require('./shared/convertStringToIntAttrs');

/**
 * Parses name string into attributes.
 * @param {string} name
 * @param {object} options
 * @param {boolean} options.inNumbers specifies if you want response in corresponding enums.
 * @param {boolean} options.useDefindexes adds defindexes
 */
module.exports = function (name, { inNumbers = false, useDefindexes = false } = {}) {
	let attributes = new Attributes(name);
	const itemName = decomposeName(name, attributes);

	attributes.elevated = attributes.quality.elevated;
	attributes.quality = attributes.quality.value;

	if (inNumbers) attributes = convertStringToIntAttrs(attributes);

	let defindexes = {};
	if (useDefindexes) {
		defindexes = getDefindexes(itemName, attributes);
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

		quality: attributes.quality,
		...(attributes.elevated ? { elevated: attributes.elevated } : {}),
	};
};

function getDefindexes(name, attributes) {
	const usableItem = {};

	if (attributes.usableItem) {
		if (attributes.usableItem.target) {
			usableItem.targetDefindex = schema.getDefindex(attributes.usableItem.target);
		}

		if (attributes.usableItem.output) {
			usableItem.output = schema.getDefindex(attributes.usableItem.output);
			usableItem.outputQuality = schema.getQuality(attributes.usableItem.outputQuality);
		}
	}

	return {
		defindex: schema.getDefindex(name),
		usableItem,
	};
}
