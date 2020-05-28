const ParsedEcon = require('./parseEconItem/ParsedEcon');

/**
 * Parses Economy item from steam.
 * @param {object} item
 * @return {object}
 */
module.exports = function (item) {
	const parsedEcon = new ParsedEcon(item);

	return {
		name: parsedEcon.itemName.getShort(),
		fullName: parsedEcon.itemName.getFull(),
		id: parsedEcon.id,
		img: parsedEcon.getImageURL(),
		...parsedEcon.getAttributes(),
	};
};
