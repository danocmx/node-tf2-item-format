/**
 * Checks if description includes part
 * @param {object} description
 * @return {boolean}
 */
exports.isPart = function (description) {
	/**
	 * Two types of part descriptions:
	 * 1) '(Airborne Enemy Kills: 4)'
	 * 2) '     Airborne Enemy Kill: 4'
	 */
	return / {5}.+: \d+|\(.+: \d+\)/.test(description.value);
};

/**
 * Gets part from description
 * @param {object} description
 * @return {string}
 */
exports.getPart = function (description) {
	const match = description.value.match(/^ {5}(.+): \d+|\((.+): \d+\)$/) || [];

	return match[1] || match[2];
};
