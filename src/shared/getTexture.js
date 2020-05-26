/**
 * Iterates over effects object to get matching effect.
 * @param {string} name
 * @return {number} effect code
 */
// eslint-disable-next-line consistent-return
module.exports = function (name) {
	const { resources }	= require('../index');
	const { textures } = resources;

	for (let i = 0; i < Object.values(textures).length; i++) {
		const texture = Object.values(textures)[i];

		if (typeof texture === 'number' || !name.includes(`${texture} `)) {
			// eslint-disable-next-line no-continue
			continue;
		}

		return texture;
	}
};
