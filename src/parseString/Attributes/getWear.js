/**
 * Gets wear from name
 * @param {string} name
 * @return {number} wear code
 */
// eslint-disable-next-line consistent-return
module.exports = function (name) {
	if (name.includes('(Battle Scarred)')) {
		return 'Battle Scarred';
	}

	if (name.includes('(Well-Worn)')) {
		return 'Well-Worn';
	}

	if (name.includes('(Field-Tested)')) {
		return 'Field-Tested';
	}

	if (name.includes('(Minimal Wear)')) {
		return 'Minimal Wear';
	}

	if (name.includes('(Factory New)')) {
		return 'Factory New';
	}
};
