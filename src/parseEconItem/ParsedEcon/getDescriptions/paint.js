/**
 * Checks if description includes paint
 * @param {object} description
 * @return {boolean}
 */
exports.isPaint = function (description) {
	return /Paint Color: /.test(description.value);
};

/**
 * Gets paint from description
 * @param {object} description
 * @return {string}
 */
exports.getPaint = function (description) {
	return description.value.replace('Paint Color: ', '');
};
