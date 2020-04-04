/**
 * Checks if tag is a grade
 * @param {Object} tag
 * @return {boolean}
 */
exports.isGrade = function (tag) {
	return tag.category === 'Rarity';
};

/**
 * Gets grade property from tag
 * @param {Object} tag
 * @return {boolean}
 */
exports.getGrade = function (tag) {
	return tag.name;
};
