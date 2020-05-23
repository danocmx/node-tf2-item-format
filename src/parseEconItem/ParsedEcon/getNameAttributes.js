const isAustralium = require('./getNameAttributes/isAustralium');

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
module.exports = function ({ item }) {
	/**
	 * @type {nameAttributes}
	 */
	const attributes = {
		australium: isAustralium(item),
	};

	return attributes;
};
