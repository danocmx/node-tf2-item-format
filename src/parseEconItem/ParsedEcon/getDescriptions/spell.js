/**
 * Checks if description includes spell
 * @param {object} description
 * @return {boolean}
 */
exports.isSpell = function (description) {
	return /^Halloween: .*/.test(description.value);
};

/**
 * Gets spell from description
 * @param {object} description
 * @return {string}
 */
exports.getSpell = function (description) {
	return description.value
		.replace('Halloween: ', '')
		.replace(' (spell only active during event)', '');
};
