/**
 * Checks if tag is a collection
 * @param {Object} tag
 * @return {boolean}
 */
exports.isCollection = function (tag) {
	return tag.category === 'Collection';
};

/**
 * Gets collection property from tag
 * @param {Object} tag
 * @return {boolean}
 */
exports.getCollection = function (tag) {
	return tag.name;
};
