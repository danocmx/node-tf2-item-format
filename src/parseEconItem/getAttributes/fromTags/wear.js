const UWears = require('../../../../resources/UWearTiers');

/**
 * Checks if tag is a wear
 * @param {Object} tag
 * @return {boolean}
 */
exports.isWear = function (tag) {
	return tag.category === 'Exterior';
};

/**
 * Gets wear property from tag
 * @param {Object} tag
 * @return {boolean}
 */
exports.getWear = function (tag) {
	return UWears[tag.name];
};
