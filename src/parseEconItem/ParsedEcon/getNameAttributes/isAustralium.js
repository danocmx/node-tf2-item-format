/**
 * Checks if item is australium
 * @param {Object} item
 * @param {Object} descriptions
 * @return {boolean}
 */
module.exports = function ({ name, descriptions }) {
	return name.includes('Australium ') && !descriptions.paint;
};
