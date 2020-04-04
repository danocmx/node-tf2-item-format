/**
 * Checks if tag is a class
 * @param {Object} tag
 * @return {boolean}
 */
exports.isClass = function (tag) {
	return tag.category === 'Class';
};

/**
 * Gets class property from tag
 * @param {Object} tag
 * @return {boolean}
 */
exports.getClass = function (tag) {
	return tag.name;
};
