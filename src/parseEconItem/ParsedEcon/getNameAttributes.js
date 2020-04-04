const isAustralium = require('./fromName/isAustralium');

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
module.exports = function (item) {
	/**
	 * @type {nameAttributes}
	 */
	const usedName = item.market_name || item.name || item.market_hash_name;

	const attributes = {
		australium: false,
	};

	if (isAustralium(usedName)) attributes.australium = true;

	return attributes;
};
