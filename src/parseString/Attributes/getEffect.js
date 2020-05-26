/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {string} effect name
 */
// eslint-disable-next-line consistent-return
module.exports = function (name) {
	const { resources }	= require('../../index');
	const { effects } = resources;

	for (let i = 0; i < Object.values(effects).length; i++) {
		const effect = Object.values(effects)[i];

		if (typeof effect === 'number' || !name.includes(`${effect} `)) {
			// eslint-disable-next-line no-continue
			continue;
		}

		return effect;
	}
};
