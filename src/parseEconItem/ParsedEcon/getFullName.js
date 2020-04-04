/**
 * Fixes the full name property if not present
 * @param {Object} item
 * @return {Object}
 */
module.exports = function (item) {
	return {
		market_name: item.market_name || item.name || item.market_hash_name,
	};
};
