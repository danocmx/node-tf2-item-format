const UEffects = require('../../../../resources/UEffects');

/**
 * Checks if description contains effect.
 * @param {object} description
 * @return {boolean}
 */
exports.isEffect = function (description) {
	// TODO: add quality check because this does not work.
	return description.value.startsWith('★ Unusual Effect: ') && description.color === 'ffd700';
};

/**
 * Gets effect number.
 * @param {object} description
 * @return {number}
 */
exports.getEffect = function (description) {
	return UEffects[
		description.value.replace('★ Unusual Effect: ', '')
	];
};
