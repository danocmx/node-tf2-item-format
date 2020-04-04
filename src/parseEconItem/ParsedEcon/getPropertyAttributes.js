const isStrange = require('./fromProperties/isStrange');

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
module.exports = function (item) {
	/**
	 * @type {propertyAttributes}
	 */
	const attributes = {
		fullName: item.market_name || item.name || item.market_hash_name,
		img: item.icon_url,
		strange: isStrange(item),
		// Inverts numeric values into booleans
		tradable: !!item.tradable,
		marketable: !!item.marketable,
		commodity: !!item.commodity,
	};

	return attributes;
};
