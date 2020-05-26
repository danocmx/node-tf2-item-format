const isAustralium = require('./getNameAttributes/isAustralium');

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
	const { item } = econ;
	let { texture } = econ.descriptions;

	/**
	 * @type {nameAttributes}
	 */
	const attributes = {
		australium: isAustralium(item),
		isUniqueHat: isUniqueHat(item.name),
	};

	if (!texture) {
		texture = getTexture(item.name)
		if (texture) attributes.texture = texture;
	}

	return attributes;
};
