/**
 * Template function to get a tag.
 * @param {string} property
 * @param {Function} getter if wanna alter
 * @return {Function}
 */
module.exports = function (property, getter) {
	/**
	 * @param {Object} tag
	 * @return {number|string}
	 */
	return (tag) => (getter ? getter(tag[property]) : tag[property]);
};
