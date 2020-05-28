const isNumber = require('../../util/isNumber');

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

		if (isNumber(effect) || !name.includes(`${effect} `)) {
			// eslint-disable-next-line no-continue
			continue;
		}

		return effect;
	}
};
