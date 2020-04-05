/**
 * Template function to check for category.
 * @param {Object} category
 * @return {Function}
 */
module.exports = function (category) {
	/**
	 * @param {Object} tag
	 * @return {string|number}
	 */
	return (tag) => tag.category === category;
};
