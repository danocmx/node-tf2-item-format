const isAustralium = require('../../shared/isAustralium');
const isUniqueHat = require('../../shared/isUniqueHat');
const getTexture = require('../../shared/getTexture');

/**
 * @typedef {nameAttributes}
 * @property {boolean} australium
 */

/**
 * Gets attributes from Name
 * Currently only australium
 * @property {Object} item
 * @return {nameAttributes}
 */
module.exports = function (econ) {
	let { texture } = econ.descriptions;

	/**
	 * @type {nameAttributes}
	 */
	const attributes = {
		australium: isAustralium(econ.itemName.origin),
		isUniqueHat: isUniqueHat(econ.itemName.origin),
	};

	if (!texture) {
		texture = getTexture(econ.itemName.origin);
		if (texture) attributes.texture = texture;
	}

	return attributes;
};
