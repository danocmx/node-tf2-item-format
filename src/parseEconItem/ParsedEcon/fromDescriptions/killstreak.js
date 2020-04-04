/* eslint-disable no-param-reassign */
/**
 * Checks if description includes killstreaker
 * Killstreaker is an `effect` from killstreak
 * @param {object} description
 * @return {boolean}
 */
exports.isKillstreaker = function (description) {
	return description.value.startsWith('Killstreaker: ');
};

/**
 * Checks if description includes sheen
 * @param {object} description
 * @return {boolean}
 */
exports.isSheen = function (description) {
	return /^Sheen: .*/.test(description.value);
};

/**
 * Checks if item is killstreak from description
 * @param {object} description
 * @return {boolean}
 */
exports.isKillstreak = function (description) {
	return description.value === 'Killstreaks Active';
};

/**
 * Gets killstreaker from description
 * @param {object} description
 * @return {string}
 */
exports.getKillstreaker = function (description) {
	return description.value.replace('Killstreaker: ', '');
};

/**
 * Gets sheen from description
 * @param {object} description
 * @return {string}
 */
exports.getSheen = function (description) {
	return description.value.replace('Sheen: ', '');
};

/**
 * Sets killstreak according to other attrs.
 * @param {object} attributes
 */
exports.setKillstreak = function (attributes) {
	if (attributes.killstreaker) attributes.killstreak = 3;
	else if (attributes.sheen) attributes.killstreak = 2;
};
