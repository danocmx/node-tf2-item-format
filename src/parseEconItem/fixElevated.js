/* eslint-disable no-param-reassign */

/**
 * Removes strange property and adds elevated property.
 * @param {Object} attributes
 * @return {Object}
 */
module.exports = function (attributes) {
	const elevated = attributes.strange && attributes.quality !== 11;

	delete attributes.strange;
	attributes.elevated = elevated;
};
