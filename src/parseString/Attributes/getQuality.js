const matchQuality = require('./getQuality/matchQuality');
const isStrange = require('./getQuality/isStrange');
const isVintage = require('./getQuality/isVintage');
const selectQuality = require('./getQuality/selectQuality');

/**
 * @typedef {Object} Quality
 * @property {number} quality
 * @property {boolean} elevated
 */

/**
 * Gets quality by providing data to selectQuality
 * @param {string} name
 * @param {Object} attributes
 * @return {Quality}
 */
module.exports = function (name, attributes) {
	// This is true for all target/output items
	if (attributes.usableItem) {
		return {
			value: 'Unique',
			elevated: false,
		};
	}

	return selectQuality({
		isStrange: isStrange(name), // For elevated
		isVintage: isVintage(name), // Because of exceptions
		otherQuality: matchQuality(name), // Matches every other quality
		attributes, // Current attributes
	});
};
