const ParsedEcon = require('./parseEconItem/ParsedEcon');

/**
 * Parses Economy item from steam.
 * @param {Object} item
 * @return {Object}
 */
module.exports = function (item) {
	const parsedEcon = new ParsedEcon(item);

	return {
		name: parsedEcon.name,
		id: parsedEcon.id,
		img: parsedEcon.getImageURL(),
		imgLarge: parsedEcon.getLargeImageURL(),
		...parsedEcon.getAttributes(),
	};
};
