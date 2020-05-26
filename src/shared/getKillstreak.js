/**
 * Gets killstreak from name
 * @param {string} name
 * @return {number} killstreak code
 */
// eslint-disable-next-line consistent-return
module.exports = function (name) {
	if (name.includes('Professional Killstreak ')) {
		return 'Professional Killstreak';
	}

	if (name.includes('Specialized Killstreak ')) {
		return 'Specialized Killstreak';
	}

	if (name.includes('Killstreak ')) {
		return 'Killstreak';
	}
};
