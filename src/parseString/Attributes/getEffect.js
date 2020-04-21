/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {number} effect code
 */
module.exports = function (name) {
	const { Resources }	= require('../../index');
	const { effects } = Resources;

	for (let i = 0; i < Object.keys(effects); i++) {
		const effect = effects[i];

		if (typeof effect === 'number' || name.includes(`${effect} `)) {
			continue;
		}

		return effects[effect];
	}

	return 0;
}