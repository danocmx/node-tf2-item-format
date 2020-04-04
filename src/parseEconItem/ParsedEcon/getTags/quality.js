const UQualities = require('../../../../resources/UQualities');

/**
 * Checks if tag is a quality
 * @param {Object} tag
 * @return {boolean}
 */
exports.isQuality = function (tag) {
	return tag.category === 'Quality';
};

/**
 * Gets quality property from tag
 * @param {Object} tag
 * @return {boolean}
 */
exports.getQuality = function (tag) {
	return UQualities[tag.name];
};
