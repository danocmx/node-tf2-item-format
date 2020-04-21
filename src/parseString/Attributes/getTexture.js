/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {number} effect code
 */
module.exports = function (name) {
	const { Resources }	= require('../../index');
	const { textures } = Resources;

	for (let i = 0; i < Object.keys(textures); i++) {
		const texture = textures[i];

		if (typeof texture === 'number' || name.includes(`${texture} `)) {
			continue;
		}

		return textures[effect];
	}

	return 0;
}