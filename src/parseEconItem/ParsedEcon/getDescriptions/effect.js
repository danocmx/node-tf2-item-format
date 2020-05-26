/**
 * Checks if description contains effect.
 * @param {object} description
 * @return {boolean}
 */
exports.isEffect = function (description, tags) {
	return description.value.startsWith('★ Unusual Effect: ') && isRightColour(description) && canQualityBeUnusual(tags);
};

function isRightColour({ color }) {
	return color === 'ffd700';
}

function canQualityBeUnusual({ quality }) {
	return quality !== 6;
}

/**
 * Gets effect number.
 * @param {object} description
 * @return {number}
 */
exports.getEffect = function (description) {
	const { resources } = require('../../../index');

	return resources.getEffectValue(
		description.value.replace('★ Unusual Effect: ', ''),
	);
};
