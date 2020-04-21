/**
 * Gets wear from name
 * @param {string} name
 * @return {number} wear code
 */
module.exports = function (name) {
	if (name.includes('(Battle Scarred)')) {
		return 5
	}

	if (name.includes('(Well-Worn)')) {
		return 4
	}

	if (name.includes('(Field-Tested)')) {
		return 3
	}

	if (name.includes('(Minimal Wear)')) {
		return 2
	}

	if (name.includes('(Factory New)')) {
		return 1
	}

	return 0;
}