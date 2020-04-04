const ParsedEcon = require('./parseEconItem/ParsedEcon');

/**
 * Parses Economy item from steam.
 * @param {Object} item
 * @return {Object}
 */
module.exports = function (item) {
	return new ParsedEcon(item);
};
