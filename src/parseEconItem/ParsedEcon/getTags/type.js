/**
 * Checks if tag is a type
 * @param {Object} tag
 * @return {boolean}
 */
exports.isType = function (tag) {
	return tag.category === 'Type';
};

/**
 * Gets type property from tag
 * @param {Object} tag
 * @return {boolean}
 */
exports.getType = function (tag) {
	return tag.internal_name;
};
