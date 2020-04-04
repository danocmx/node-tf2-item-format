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
	const { qualities } = require('../../../index').resources;

	return qualities[tag.name];
};
