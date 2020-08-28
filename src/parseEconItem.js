const ParsedEcon = require('./parseEconItem/ParsedEcon');

/**
 * Parses Economy item from steam.
 * @param {object} item
 * @param {object} options
 * @param {boolean} options.inNumbers
 * @return {object}
 */
module.exports = function (item, options = { inNumbers: true }) {
	const parsedEcon = new ParsedEcon(item, options);

	return {
		name: parsedEcon.itemName.getShort(),
		fullName: parsedEcon.itemName.getFull(),
		id: parsedEcon.id,
		img: parsedEcon.getImageURL(),
		...parsedEcon.getAttributes(),
	};
};
