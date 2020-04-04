const getElevated = require('./getPropertyAttributes/getElevated');

/**
 * @typedef propertyAttributes
 * @property {boolean} elevated
 * @property {boolean} tradable
 * @property {boolean} marketable
 * @property {boolean} commodity
 */

/**
 * Exports the properties into attributes
 * @param {object} item
 * @return {propertyAttributes}
 */
module.exports = function ({ item, tags }) {
	/**
	 * @type {propertyAttributes}
	 */
	const attributes = {
		elevated: getElevated(item, tags),

		// Inverts numeric values into booleans
		tradable: !!item.tradable,
		marketable: !!item.marketable,
		commodity: !!item.commodity,
	};

	return attributes;
};
