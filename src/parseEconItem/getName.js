module.exports = function (item) {
	return item.market_name || item.name || item.market_hash_name;
};
